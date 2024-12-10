const express = require('express');
//const User = require('./models/User');
const {getUser, showLogin, traiteLogin, showRegister, register, showProduit, addProduit} = require('./controllers/UserController');
const bodyParser = require ('body-parser');
const dotenv = require('dotenv').config();

//dotenv.config();


const app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



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

app.get('/produit', async (req, res) => {
    try {
        showProduit(req, res);
    } catch (error) {
        console.log("erreur dans l'ajout du produit :", error.message);
        res.status(500).send('erreur connexion!')
    }
})

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

app.post ('/produit', async (req, res) => {
    try {
        addProduit(req, res);
    }catch (error) {
        console.log('erreur enregistrment produit :', error);
        res.status(500).send("Erreur lors de l'enregistrement");
    }
})



app.listen (3000, ()=> {
    console.log('connexion serveur reussi');
       
})