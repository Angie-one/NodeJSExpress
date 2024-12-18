const express = require('express');
//const User = require('./models/User');
const {getUser, showLogin, traiteLogin, showRegister, register, showProduit, addProduit, headerView, adminDeleteProduit, validateProduit} = require('./controllers/UserController');
const bodyParser = require ('body-parser');
const produitView = require('./views/produitView');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const authenticateToken = require('./middleware/authentification');
const gestionView = require('./views/AdminView');

const app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());



app.get('/user',(req, res) => {
    const username = req.query.username; // Utilisez req.query pour obtenir le nom d'utilisateur
    getUser(req, res, username);
   
});

app.get('/login', async (req, res) => {
    try {
        showLogin(req, res);
    } catch (error) {
        console.error("Erreur lors de l'affichage du formulaire de connexion :", error.message);
        res.status(500).send("Erreur lors de l'affichage du formulaire de connexion");
    }
});

app.get('/register', async (req, res) => {
    try {
        showRegister(req, res);
    } catch (error) {
        console.error("Erreur lors de l'affichage du formulaire d'enregistrement :", error.message);
        res.status(500).send("Erreur lors de l'affichage du formulaire d'enregistrement");
    }
});


app.get('/headerView', async (req, res) => {
    try {
        headerView(req, res);
    }catch (error) {
        console.log('erreur du header :' , error.message)
        res.status(500).send('erreur affichage')
    }
});

app.get('/produit', (req, res) => {showProduit(req, res);});

app.post('/produit', authenticateToken, (req, res,) => {produitView(req, res,); });

app.post('/login', async (req, res) => {
    try {
        traiteLogin(req, res);
    } catch (error) {
        console.error("Erreur lors de la connexion :", error.message);
        res.status(500).send("Erreur lors de la connexion");
    }
});

app.post('/register', async (req, res) => {
    try {
        register(req, res);
    } catch (error) {
        console.error("Erreur lors de l'enregistrement :", error.message);
        res.status(500).send("Erreur lors de l'enregistrement");
    }
});

app.post('/produit/validationProduit', authenticateToken, (req, res) => {
    const { produitId } = req.body;
    validateProduit(req, res, produitId);
});

app.delete('/produit/adminDeleteProduit', authenticateToken, async (req, res) => {
    const { produitId } = req.body;
    adminDeleteProduit(req, res, produitId);
});

app.get('/gestion', authenticateToken, (req, res) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                console.error("Erreur lors de la vérification du token :", err.message);
                res.status(401).send("Accès non autorisé");
            } else if (decoded.role === 'admin') {
                const query = 'SELECT * FROM produits';
                db.all(query, (err, produits) => {
                    if (err) {
                        console.error("Erreur lors de la récupération des produits :", err.message);
                        res.status(500).send("Erreur lors de la récupération des produits");
                    } else {
                        res.send(gestionView(decoded, produits));
                    }
                });
            } else {
                res.status(403).send("Accès interdit");
            }
        });
    } else {
        res.status(401).send("Accès non autorisé");
    }
});

app.listen (3000, ()=> {
    console.log('connexion serveur reussi');
       
})