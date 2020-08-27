const {Package, User} = require('../models')

class PackageController {
    static show (req, res) {
        Package.findAll()
        .then(packages => {
            res.render('template', {packages, header: 'List Package'})
        })
        .catch(err => {
            res.sedn(err)
        })
    }
    static edit (req, res) {

    }
    static postEdit (req, res) {
        
    }
}

module.exports = PackageController