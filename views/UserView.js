const headerView = require('./headerView');

function userView(user, produits, userProduits, role) {
    const accueil = `<h1>Bonjour ${user.username}</h1>`;
    let produitList = produits.length > 0 
        ? produits.map(produit => `
            <div>
                <p>Titre : ${produit.titre}</p>
                <p>Image : ${produit.image}</p>
                <p>Description : ${produit.description}</p>
                <p>Prix : ${produit.prix}</p>
            </div>
        `).join('') 
        : '<p>Aucune annonce disponible.</p>';

     let userProduitList = userProduits.length > 0
        ? userProduits.map(produit => `
            <div>
                <p>Titre : ${produit.titre}</p>
                <p>Image : ${produit.image}</p>
                <p>Description : ${produit.description}</p>
                <p>Prix : ${produit.prix}</p>
            </div>
        `).join('')
        : '<p>Aucune annonce disponible.</p>';

    return `
        ${headerView(user.role)}
        ${accueil}
        <h2>Liste des annonces</h2>
        ${produitList}
        <h2>Mes annonces</h2>
        ${userProduitList}
        </body></html>
    `;
}

module.exports = userView;
