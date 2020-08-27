const UserController = require('../controllers/UserController')
const route = require('express').Router()

route.get('/', UserController.show)
route.get('/register', UserController.register)
route.post('/register', UserController.registPost)
route.get('/order', UserController.order)
route.get('/edit/:id', UserController.edit)
route.post('/edit', UserController.editPost)
route.get('/delete/:id', UserController.delete)

module.exports = route