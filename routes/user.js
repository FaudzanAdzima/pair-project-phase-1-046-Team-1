const UserController = require('../controllers/UserController')
const authentication = require('../middlewares/authentication')
const routes = require('express').Router()

routes.get('/register', UserController.register)
routes.post('/register', UserController.postRegister)

routes.get('/login', UserController.login)
routes.post('/login', UserController.postLogin)

routes.use(authentication)

routes.get('/profile/edit', UserController.edit)
routes.post('/profile/edit', UserController.postEdit)

routes.get('/request/create', UserController.create)
routes.post('/request/create', UserController.postCreate)

routes.get('/request/list', UserController.requestList)


module.exports = routes