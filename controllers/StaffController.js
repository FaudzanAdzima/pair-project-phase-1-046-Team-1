const {Staff, Role} = require('../models')

class StaffController {
    static show (req, res) {
        Staff.findAll()
        .then(staffs => {
            res.render('template', {staffs, header: 'List Staff'})
        })
        .catch(err => {
            res.send(err)
        })
    }
    static add (req, res) {
        res.render('template', {header: 'Add Staff'})     
    }
    static postAdd (req, res) {
        let obj = {
            firstName: req.body.firstName.trim(),
            lastName: req.body.lastName.trim(),
            email: req.body.email.trim(),
            phone: req.body.phone.trim(),
            gender: req.body.gender.trim(),
            age: req.body.age.trim(),
            status: 'Available'
        }
        Staff.create(obj)
        .then(data => {
            res.redirect('/staffs')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static edit (req, res) {
        Staff.findOne({
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.render('template', {data, header: 'Edit Staff'})
        })
        .catch(err => {
            res.sedn(err)
        })
        
    }
    static postEdit (req, res) {
        let obj = {
            firstName: req.body.firstName.trim(),
            lastName: req.body.lastName.trim(),
            email: req.body.email.trim(),
            phone: req.body.phone.trim(),
            gender: req.body.gender.trim(),
            age: req.body.age.trim(),
        }
        Staff.update(obj, {
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.redirect('/staffs')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static delete (req, res) {
        Staff.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.redirect('/staffs')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = StaffController