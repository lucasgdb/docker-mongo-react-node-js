const jwt = require('jsonwebtoken');

const { SECRET_HASH } = require('../configs/env');

module.exports = function generateAccessToken(_id) {
	const accessToken = jwt.sign({ _id }, SECRET_HASH, {
		expiresIn: 86400,
	});

	return accessToken;
};
