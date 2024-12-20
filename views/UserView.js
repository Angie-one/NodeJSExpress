const headerView = require('./headerView');

function userView(user, produits, userProduits, role) {
    const accueil = `<h1>Bonjour ${user.username}</h1>`;

    let produitList = '';
    if (Array.isArray(produits) && produits.length > 0) {
        produits.forEach(produit => {
            produitList += `
                <div>
                    <p>Titre : ${produit.titre}</p>
                    <p>Image : ${produit.image}</p>
                    <p>Description : ${produit.description}</p>
                    <p>Prix : ${produit.prix}</p>
                </div>
            `;
        });
    } else {
        produitList = '<p>Aucune annonce disponible.</p>';
    }

    let userProduitList = '';
    if (Array.isArray(userProduits) && userProduits.length > 0) {
        userProduits.forEach(produit => {
            userProduitList += `
                <div>
                    <p>Titre : ${produit.titre}</p>
                    <p>Image : ${produit.image}</p>
                    <p>Description : ${produit.description}</p>
                    <p>Prix : ${produit.prix}</p>
                </div>
            `;
        });
    } else {
        userProduitList = '<p>Aucune annonce disponible.</p>';
    }

    return `
        ${headerView(role)}
        ${accueil}
        <h2>Liste des annonces</h2>
        ${produitList}
        <h2>Mes annonces</h2>
        ${userProduitList}
        </body></html>
    `;
}

module.exports = userView;
