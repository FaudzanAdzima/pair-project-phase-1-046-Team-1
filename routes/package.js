const PackageController = require('../controllers/PackageController')

const routes = require('express').Router()


routes.get('/', PackageController.show)
routes.get('/add', PackageController.add)
routes.post('/add', PackageController.postAdd)
routes.get('/edit/:id', PackageController.edit)
routes.post('/edit/:id', PackageController.postEdit)

module.exports = routes