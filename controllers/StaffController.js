const {Staff, Role} = require('../models')

class StaffController {
    static show (req, res) {
        Staff.findAll()
        .then(staffs => {
            let role = req.session.user.RoleId
            res.render('template', {staffs, header: 'List Staff', role})
        })
        .catch(err => {
            res.send(err)
        })
    }
    static add (req, res) {
        let role = req.session.user.RoleId
        res.render('template', {header: 'Add Staff', role})     
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
            let role = req.session.user.RoleId
            res.render('template', {data, header: 'Edit Staff', role})
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