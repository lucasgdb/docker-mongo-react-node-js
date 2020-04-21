const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const { PORT, MONGO_URL } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/v1/data', (req, res) =>
	res.status(200).json({ response: 'hello-world' })
);

mongoose.connect(MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
}, err => {
	if (err) throw err;

	app.listen(PORT || 8080, () =>
		console.log('The server has been started.')
	);
});
