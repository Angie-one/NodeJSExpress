function userView(user, produit){
    
    const accueil = `<h1>Bonjour ${user.username}</h1>`;
    const invitUser = `Invitez vos amis a s'incrire par ce lien <a href="/register">Page inscription</a></p>`;
    //const ajoutproduit = `créez votre annonce  <a href="/produit">Ajouter un produit</a>`;
    /*const produitList = produit.map(produit=>
        `<div>
        <p>titre : ${produit.titre}</p><br>
        <p>image : ${produit.image}
        <p>description : ${produit.description}</p><br>
        <p>prix : ${produit.prix}</p><br>
        <div>`
    ).join(``) ;
    console.log(produit)*/
   
    return `${accueil} <br> ${invitUser}, <a href="/produit">ajouter un article</a><br> 
    <h2>Liste des annonces</h2> `;
}

module.exports = userView;