const headerView = require('./headerView');

function produitView(username) {
    const utilisateur = username.name; 
   // const entete = `Ajouter votre article`;
     
    return `<html><body><form action="/produit" method="post">
    <input type="text" name="titre" placeholder="Entrez le titre"></input><br>
    <input type="file" name="image" >
    <input type="text" name="description" placeholder="Entrez la description"></input><br>
    <input type="text" name="prix" placeholder="Entrez le prix"></input><br>
    <input type="submit"></input></form>
    <p>Afficher les annonces <a href=href="/user?username=${utilisateur} ">ici</a>
    </body></html>`
}

module.exports = produitView;

