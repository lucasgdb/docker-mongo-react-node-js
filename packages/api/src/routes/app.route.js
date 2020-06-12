const { Router } = require('express');

const UserController = require('../controllers/user.controller');

const routes = Router();

routes.get('/user', UserController.index);

module.exports = routes;
