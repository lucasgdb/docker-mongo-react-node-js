const express = require('express');
const compression = require('compression');
const cors = require('cors');

const { PORT } = require('./configs/env');

const routes = require('./routes');
require('./database');

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

// eslint-disable-next-line no-console
app.listen(PORT || 8080, () => console.log('server started!'));
