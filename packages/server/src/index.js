const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { SERVER_PORT } = require('./configs/default.json');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/v1/data', (req, res) =>
    res.status(200).json({ response: 'hello-world' })
);

async function main() {
    try {
        await mongoose.connect('mongodb://localhost/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        app.listen(SERVER_PORT, () =>
            console.log('The server has been started.')
        );
    } catch (err) {
        throw err;
    }
}

main();
