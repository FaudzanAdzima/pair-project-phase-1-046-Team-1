const {Package, User} = require('../models')

class PackageController {
    static show (req, res) {
        Package.findAll()
        .then(packages => {
            res.render('template', {packages, header: 'List Package'})
        })
        .catch(err => {
            res.send(err)
        })
    }
    static add (req, res) {
        res.render('template', {header: 'Add Package'})
    }
    static postAdd (req, res) {
        let obj = {
            name: req.body.name.trim(),
            duration: req.body.duration.trim(),
            price: req.body.price.trim(),
            description: req.body.description.trim()
        }
        Package.create(obj)
        .then(data => {
            res.redirect('/packages')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static edit (req, res) {
        Package.findOne({
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.render('template', {data, header: 'Edit Package'})
        })
        .catch(err => {
            res.sedn(err)
        })
        
    }
    static postEdit (req, res) {
        let obj = {
            name: req.body.name.trim(),
            duration: +req.body.duration.trim(),
            price: +req.body.price.trim(),
            description: req.body.description.trim()
        }
        Package.update(obj, {
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.redirect('/packages')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static delete (req, res) {
        Package.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.redirect('/packages')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = PackageController