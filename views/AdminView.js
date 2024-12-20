const headerView = require('./headerView');

function gestionView(username, produits) {
    let deleteProduit = '';
    let ValidationProduit = '';

    if (Array.isArray(produits) && produits.length > 0){
        produits.forEach(produits => {
            deleteProduit += `
                <div>
                    <p>Annonce ID: ${produits.id} - Titre: ${produits.titre}</p>
                    <button onclick="deleteProduit(${produits.id})">Supprimer</button>
                </div>
            `;

            ValidationProduit += `
                <div>
                    <p>Annonce ID: ${produits.id} - Titre: ${produits.titre}</p>
                    <button onclick="ValidationProduit(${produits.id})">Valider</button>
                </div>
            `;
        });
    } else {
        deleteProduit = '<p>Aucune annonce à supprimer.</p>';
        ValidationProduit = '<p>Validation en attente.</p>';
    }

    return `
        ${headerView(username)}
        <h1>Gestion Admin</h1>
        <h2>Validation annonce</h2>
        ${ValidationProduit}
        <h2>Suppression annonce</h2>
        ${deleteProduit}
        </body></html>`;
}

module.exports = gestionView;
