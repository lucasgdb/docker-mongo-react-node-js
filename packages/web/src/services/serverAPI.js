const axios = require('axios');

const { baseURL } = require('~/configs/default.json');

const serverAPI = axios.create({ baseURL });

module.exports = serverAPI;
