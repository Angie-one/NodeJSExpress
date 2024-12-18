function headerView(role='') {
    const adminLink = role === 'admin' ?'<a href="/gestion">Gestion Admin</a>':'';
    
    return `
    <html>
    <head>
    <meta charset="UTF-8">
        <title>AppResale</title>
        <style>
            body{
                background-color:rgb(108, 112, 108);
            }
            nav {
                background-color: #90EE90;
                overflow: hidden;
            }
            nav a {
                float: left;
                display: block;
                color: #808080;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }
            nav a:hover {
                background-color: #ddd;
                color: black;
            }
            h1 {
                text-align:center;
            }    
        </style>
    </head>
    <body>
    <nav>
        <a href="/login">Mon compte</a>
        <a href="/produit">Créer une annonce</a>
        <a href="/register">Inscription</a>
         ${adminLink}
    </nav>
    <h1>AppResale l'appli utile </h1>
    `;
}
function gestionView() {
    const query = 'SELECT * FROM produits WHERE status = "requested"';
    db.all(query, (err, rows) => {
        if (err) {
            console.error("Erreur lors de la récupération des demandes de suppression :", err.message);
            return '';
        }
        let requestedDeletions = '';
        rows.forEach(row => {
            requestedDeletions += `<p>Annonce ID: ${row.id} - Titre: ${row.titre} - <button onclick="deleteProduit(${row.id})">Supprimer</button></p>`;
        });
        return `${headerView('admin')}
        <h1>Gestion Admin</h1>
        <h2>Demandes de suppression</h2>
        ${requestedDeletions}
        </body></html>`;
    });
}



module.exports=headerView, gestionView