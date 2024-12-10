function userView(user){
    
    return `<h1>Bonjour ${user.username}</h1><br> ${user.username} voici votre page utilisateur <br> <p>A partir de votre page vous pouvez invitez vos amis a s'incrire par ce lien <a href="/register">Page inscription</a></p><br><p>A partir de votre page vous pouvez enregistrer vos nouveaux produits <a href="/produit">Ajouter un produit</a> `;
}

module.exports = userView;