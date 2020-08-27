const Controller = require('../controllers/Controller')

const routes = require('express').Router()
const package = require('./package');
const staff = require('./staff');


routes.get('/', Controller.home)
routes.use('/packages', package)
routes.use('/staffs', staff)

module.exports = routes