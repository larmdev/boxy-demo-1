const pkg = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const { sign } = pkg;

async function signAccessToken(payload) {
    return new Promise((resolve, reject) => {
        const options = {
            expiresIn: '1d',
            algorithm: 'HS256'
        };
        
        sign(payload, JWT_SECRET, options, (error, token) => {
            if (error) {
                reject(error);
            }
            resolve(token);
        });
    })
};

module.exports = {
    signAccessToken
}