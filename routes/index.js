const Controller = require('../controllers/Controller')

const routes = require('express').Router()
const package = require('./package');
const staff = require('./staff');
const user = require('./user');

routes.get('/', Controller.home)
routes.get('/logout', Controller.logout)
routes.use('/packages', package)
routes.use('/staffs', staff)
routes.use('/user', user)

module.exports = routes