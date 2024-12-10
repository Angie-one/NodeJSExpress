function produitView() {
    return '<html><body><h1>Produit</h1><form action="/produit" method="post"><input type="text" name="titre" placeholder="Entrez le titre"></input><br><input type="text" name="description" placeholder="Entrez la description"></input><br><input type="text" name="prix" placeholder="Entrez le prix"></input><br><input type="submit"></input></form><p>Revenir à la page login<a href="/login">ici</a></body></html>';
}

module.exports = produitView;

