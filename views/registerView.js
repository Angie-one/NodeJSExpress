function registerView() {

    return `<html><body><form action="/register" method="post"><input type="text" name="username" placeholder="Entrez votre identifiant"></input><input type="password" name="password" placeholder="Entrez votre mot de passe"></input><input type="submit"></input><br><a href='/login'>page Login</a></form></body></html>`;
}

module.exports = registerView;