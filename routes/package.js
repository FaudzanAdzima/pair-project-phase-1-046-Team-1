const PackageController = require('../controllers/PackageController')
const authentication = require('../middlewares/authentication')
const routes = require('express').Router()

routes.use(authentication)
routes.get('/', PackageController.show)
routes.get('/add', PackageController.add)
routes.post('/add', PackageController.postAdd)
routes.get('/edit/:id', PackageController.edit)
routes.post('/edit/:id', PackageController.postEdit)
routes.get('/delete/:id', PackageController.delete)

module.exports = routes