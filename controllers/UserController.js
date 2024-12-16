const User = require('../models/User');
const Produit = require('../models/Produit');
const userView = require('../views/UserView');
const loginView = require('../views/loginView');
const registerView = require('../views/registerView');
const ProduitView = require('../views/produitView');
const headerView = require('../views/headerView');

const db = require('../db');
const dbProduit = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secretKey = 'CodeuseFoireuse';  process.env.JWT_SECRET;

function getUser(req, res, username) {
    console.log('Paramètre requête', username);
    const query = 'SELECT * FROM users WHERE username = ?';
    db.get(query, [username], (err, row) => {
        if (err) {
            console.error("Erreur lors de la récupération de l'utilisateur :", err.message);
            res.status(500).send("Erreur lors de la récupération de l'utilisateur");
        } else if (row) {
            const produitQuery = 'SELECT * FROM produits';
            dbProduit.all(produitQuery, (err, produits) => {
                if (err) {
                    console.error("Erreur lors de la récupération des produits :", err.message);
                    res.status(500).send("Erreur lors de la récupération des produits");
                } else {
                    res.send(userView(row, produits));
                }
            });
        } else {
            res.status(404).send("Utilisateur non trouvé");
        }
    });
}

function showLogin(req, res) {
    res.end(loginView());
}

function traiteLogin(req, res) {
    const { username, password } = req.body;
    console.log("connexion pour l'utilisateur :", username);
    const query = 'SELECT * FROM users WHERE username = ?';
    db.get(query, [username], (err, row) => {
        if (err) {
            console.error("Erreur lors de la connexion :", err.message);
            res.status(500).send("Erreur lors de la connexion");
        } else if (row) {
            console.log("Utilisateur trouvé :", row);
            bcrypt.compare(password, row.password, (err, result) => {
                if (err) {
                    console.error("Erreur lors de la comparaison du mot de passe :", err.message);
                    res.status(500).send("Erreur lors de la connexion");
                } else if (result) {
                    const token = jwt.sign({ username: row.username }, secretKey, { expiresIn: '1h' });
                    console.log("Token généré :", token);
                    getUser(req, res, username);
                    
                } else {
                    console.log("Mot de passe incorrect pour l'utilisateur :", username);
                    res.send("Connexion échouée");
                }
            });
        } else {
            console.log("Utilisateur non trouvé par traitelogin:", username);
            res.send("Connexion échouée");
        }
    });
}

function showRegister(req, res) {
    res.send(registerView());
}

function register(req, res) {
    const { username, password } = req.body;
    console.log("Username:", username);
    console.log("Password:", password);

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            console.error("Erreur lors de la génération du sel :", err.message);
            return res.status(500).send("Erreur lors de l'enregistrement");
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                console.error("Erreur lors du hachage du mot de passe :", err.message);
                return res.status(500).send("Erreur lors de l'enregistrement");
            }

            // Déterminer le rôle de l'utilisateur
            const role = username === 'admin' ? 'admin' : 'user';

            const newUser = new User(null, username, hash, role);
            const query = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
            db.run(query, [newUser.username, newUser.password, newUser.role], function(err) {
                if (err) {
                    console.error("Erreur lors de l'enregistrement :", err.message);
                    res.status(500).send("Erreur lors de l'enregistrement");
                } else {
                    console.log("Enregistrement réussi :", newUser);
                    res.cookie('username', username, { maxAge: 10, httpOnly: true });
                    res.cookie('password', hash, { maxAge: 10, httpOnly: true });
                    res.send("Vous avez réussi à vous inscrire grâce à la codeuse. Bravo!! <a href='/Login'>se connecter</a>");
                }
            });
        });
    });
}

function showProduit(req, res) {
    res.send(ProduitView());
}

function addProduit (req, res, produit) {
    console.log(produit)
    const { titre, description, prix } = req.body;
    
    console.log("Titre :", titre);
    console.log("Description :", description);
    console.log("Prix :", prix);

    const newproduit =  new Produit (null, titre, description, prix)
    const query = 'INSERT INTO produits (titre,image, description, prix) VALUES (?, ?, ?, ?)';
    dbProduit.run(query, [newproduit.titre,newproduit.image, newproduit.description, newproduit.prix], function(err) {
        if (err) {
            console.log("erreur d'enregistrement du produit", err.message)
            res.status(500).send('erreur d\'enregistrement non trouvé')
        }else {
            console.log("enregistrement effectué :", newproduit)
            res.send("produit enregistrée! enregistrer un nouveau produit <a href='/produit'>ici</a> retourner à la page accueil <a href='/user'>mon ")
        }
    }) 
}

module.exports = { getUser, showLogin, traiteLogin, showRegister, register, showProduit, addProduit, headerView };
