const { verify } = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

function VerifyToken(req, res, next) {
    try {
        if (!req.headers['authorization']) {
            return res.status(401).send('Forbidden').end();
        }
        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];

        const payload = verify(token, JWT_SECRET);
        if (!req.context) {
            req.context = {};
        }
        const data = {
            ...payload
        }
        req.context.account = data;
        req.context.accountId = payload.accountId;

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
    next();
}

module.exports = {
    VerifyToken
}
