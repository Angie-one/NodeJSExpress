const headerView = require ('./headerView');

function loginView(){
    return `${headerView()}
    <form action="/login" method="post">
        <input type="text" name="username" placeholder="Entrez votre Nom"></input><br>
        <input type="password" name="password" placeholder="Entrez votre mot de passe"></input><br>
        <input type="submit"></input>
    </form>
    <a href='/register'>page Inscription</a>
    </body></html>`;
}
    

module.exports = loginView;