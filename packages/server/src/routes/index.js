const { Router } = require('express');

const AppRoutes = require('./app.route');
const AuthMiddleware = require('../middlewares/auth.middleware');

const AuthRoutes = require('./auth.route');

const routes = Router();

routes.use('/api/v1', AuthMiddleware, AppRoutes);
routes.use('/auth', AuthRoutes);

module.exports = routes;
