const jwt = require('jsonwebtoken');

const configs = require('../configs');

const { SECRET_HASH } = configs;

module.exports = function generateAccessToken(_id) {
	const accessToken = jwt.sign({ _id }, SECRET_HASH, {
		expiresIn: 86400,
	});

	return accessToken;
};
