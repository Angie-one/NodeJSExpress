const jwt = require('jsonwebtoken');
const secretKey = 'CodeuseFoireuse';

function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    console.log('verification token :', token)
    if (token == null) return res.sendStatus(401);

    try {
        const user = jwt.verify (token, secretKey)
        req.user = user;
        next()
    } catch (error) {
        return res.status(403).send("acces non autorisé");
    }
}

module.exports = authenticateToken;
