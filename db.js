const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database ('./database.sqlite', (err) => {
    if (err) {
        console.error('Erreur de connexion :', err.message)
    }else {
        db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE  NOT NULL, password TEXT NOT NULL, role DEFAULT user)');
        console.log ('connexion à la bdd');
    }
});

const dbProduit = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Erreur de connexion :', err.message);
    } else {
        dbProduit.run('CREATE TABLE IF NOT EXISTS produits (id INTEGER PRIMARY KEY AUTOINCREMENT, titre TEXT NOT NULL, description TEXT NOT NULL,image TEXT, prix INT NOT NULL,statut TEXT DEFAULT "en attente")', (err) => {
            if (err) {
                console.error('Erreur lors de la création de la table produits :', err.message);
            } else {
                console.log('Connexion à la bdd et création de la table produits réussie');
            }
        });
    }
});



module.exports = db ;