const User = require('../models/User');

module.exports = {
	async index(req, res) {
		try {
			const users = await User.find();

			return res.status(200).json(users);
		} catch (err) {
			return res.status(400).json(err);
		}
	},
};
