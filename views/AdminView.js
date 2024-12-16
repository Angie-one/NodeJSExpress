const headerView = require('./headerView');

function gestionView() {
    const validerAnnonce = 'A faire';
    const banUser = 'A faire';
    return `${headerView()}
    <h1>Gestion Admin</h1>
    <p>Valider Annonce: ${validerAnnonce}</p>
    <p>Ban User: ${banUser}</p>
    </body></html>`;
}

module.exports = gestionView;
