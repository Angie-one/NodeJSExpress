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
                color: #f2f2f2;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }
            nav a:hover {
                background-color: #ddd;
                color: black;
            }
        </style>
    </head>
    <body>
    <nav>
        <a href="/register">Inscription</a>
        <a href="/user">Mon compte</a>
        <a href="/produit">Créer une annonce</a>
    </nav>
    `;
}

module.exports=headerView