const UserController = require('../controllers/UserController')
const authentication = require('../middlewares/authentication')
const routes = require('express').Router()

routes.get('/register', UserController.register)
routes.post('/register', UserController.postRegister)

routes.get('/login', UserController.login)
routes.post('/login', UserController.postLogin)

routes.use(authentication)



module.exports = routes