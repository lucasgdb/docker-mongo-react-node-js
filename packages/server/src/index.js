const express = require('express');
const cors = require('cors');

const configs = require('./configs/env');

const routes = require('./routes');
require('./database');

const app = express();
const { PORT } = configs;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(PORT || 8080, () =>
	// tslint:disable-next-line: no-console
	console.log('server started!')
);
