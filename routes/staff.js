const StaffController = require('../controllers/StaffController')
const authentication = require('../middlewares/authentication')
const routes = require('express').Router()

routes.use(authentication)
routes.get('/', StaffController.show)
routes.get('/add', StaffController.add)
routes.post('/add', StaffController.postAdd)
routes.get('/edit/:id', StaffController.edit)
routes.post('/edit/:id', StaffController.postEdit)
routes.get('/delete/:id', StaffController.delete)

module.exports = routes