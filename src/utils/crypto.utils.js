const { createHmac, randomBytes } = require('crypto');

function sha512(password, salt) {
	const hash = createHmac('sha512', salt);
	hash.update(password);
	const value = hash.digest('hex');
	return {
		passwordSalt: salt,
		passwordHash: value
	};
};

function generateToken(length) {
	return randomBytes(length / 2).toString();
};


module.exports = {
	generateToken,
	sha512
}
