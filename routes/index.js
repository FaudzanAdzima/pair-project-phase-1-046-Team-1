const Controller = require('../controllers/Controller')

const routes = require('express').Router()
const package = require('./package');
const users = require('./user')


routes.get('/', Controller.home)
routes.post('/login', Controller.login)
routes.use('/packages', package)
routes.use('/users', users)

module.exports = routes