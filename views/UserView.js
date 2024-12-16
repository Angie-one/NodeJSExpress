const headerView = require ('./headerView')
function userView(user, produits){
    
    const accueil = `<h1>Bonjour ${user.username}</h1>`;
    let produitList = '';

    if (Array.isArray(produits)) {
        produits.forEach(produit => {
            produitList += `
            <div>
                <p>Titre : ${produit.titre}</p><br>
                <p>Image : ${produit.image}</p><br>
                <p>Description : ${produit.description}</p><br>
                <p>Prix : ${produit.prix}</p><br>
            </div>`;
        });
    } else {
        produitList = '<p>Aucune annonce disponible.</p>';
    }
   
    return `${headerView()} <br>
    ${accueil} <br> 
    <h2>Liste des annonces</h2> <br> ${produitList}`;
}

module.exports = userView;