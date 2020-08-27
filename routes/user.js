const UserController = require('../controllers/UserController')
const route = require('express').Router()

route.get('/', UserController.show)
route.get('/register', UserController.register)
route.post('/register', UserController.registPost)
route.get('/order/:id', UserController.order)
route.get('/edit/:id', UserController.edit)
route.post('/edit', UserController.editPost)
route.get('/delete/:id', UserController.delete)
route.post('/userpackage', UserController.userpackage)
route.get('/:UserId/delete/userpackage/:id', UserController.userPackageDelete)
route.post('/confirm/:id', UserController.confirm)

module.exports = route