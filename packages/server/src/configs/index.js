const dotenv = require('dotenv');

dotenv.config();

const { MONGO_URL, SECRET_HASH, PORT } = process.env;

module.exports = {
	MONGO_URL,
	SECRET_HASH,
	PORT,
};
