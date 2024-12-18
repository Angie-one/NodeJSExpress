const headerView = require('./headerView');

function gestionView(user, produits) {
    let deleteProduit = produits.length > 0
        ? produits.map(row => `
            <div>
                <p>Annonce ID: ${row.id} - Titre: ${row.titre}</p>
                <button onclick="deleteProduit(${row.id})">Supprimer</button>
            </div>
        `).join('')
        : '<p>Aucune annonce à supprimer.</p>';

    let ValidationProduit = produits.length > 0
        ? produits.map(row => `
            <div>
                <p>Annonce ID: ${row.id} - Titre: ${row.titre}</p>
                <button onclick="ValidationProduit(${row.id})">Valider</button>
            </div>
        `).join('')
        : '<p>Validation en attente.</p>';

    return `
        ${headerView(user.role)}
        <h1>Gestion Admin</h1>
        <h2>Validation annonce</h2>
        ${ValidationProduit}
        <h2>Suppression annonce</h2>
        ${deleteProduit}
        </body></html>`;
}

module.exports = gestionView;
