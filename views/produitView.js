const headerView = require("./headerView");

function produitView() {
         
    return `${headerView}
    <form action="/produit" method="post">
    <input type="text" name="titre" placeholder="Entrez le titre"></input><br>
    <input type="text" name="description" placeholder="Entrez la description"></input><br>
    <input type="text" name="prix" placeholder="Entrez le prix"></input><br>
    <input type="submit"></input></form>
    
    </body></html>`
}

module.exports = produitView;

