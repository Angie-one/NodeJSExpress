function headerView() {
    return `
    <html>
    <head>
    <meta charset="UTF-8">
        <title>AppResale</title>
        <style>
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
    </nav>
    <h1>AppResale l'appli utile </h1>
    `;
}


module.exports=headerView