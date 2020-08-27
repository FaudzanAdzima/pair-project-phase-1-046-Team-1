const PackageController = require('../controllers/PackageController')

const routes = require('express').Router()


routes.get('/', PackageController.show)
routes.get('/edit/:id', PackageController.edit)
routes.get('/edit/:id', PackageController.postEdit)

module.exports = routes