const headerView= require('./headerView');

function registerView() {

    const bienvenu = `<h1>Bienvenue sur notre application de revente d'objet de seconde main : AppResale</h1>`

    return `${headerView()}
    <h1>${bienvenu}</h1><br>
    <form action="/register" method="post">
        <input type="text" name="username" placeholder="Entrez votre identifiant"></input>
        <input type="password" name="password" placeholder="Entrez votre mot de passe"></input>
        <input type="submit"></input><br>
    </form>
    <a href='/login'>page Login</a>
    </body></html>`;
}

module.exports = registerView;