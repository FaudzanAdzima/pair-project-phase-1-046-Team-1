const PackageControll = require('../controllers/PackageControl')
const route = require('express').Router()

route.get('/', PackageControll.show)


module.exports = route