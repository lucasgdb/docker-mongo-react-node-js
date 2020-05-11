const mongoose = require('mongoose');

const configs = require('../configs/env');

const { MONGO_URL } = configs;

mongoose.connect(
	MONGO_URL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	},
	(err) => {
		if (err) throw err;

		// tslint:disable-next-line: no-console
		console.log('database connected!');
	}
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
