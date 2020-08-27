const Controller = require('../controllers/Controller')

const routes = require('express').Router()
const package = require('./package');


routes.get('/', Controller.home)
routes.use('/packages', package)

module.exports = routes