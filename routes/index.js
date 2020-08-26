const route = require('express').Router()
const packageRoute = require('./packageRoute')

route.get('/', (req, res) => {
    res.render('home')
})
route.use('/packages',packageRoute)

module.exports = route