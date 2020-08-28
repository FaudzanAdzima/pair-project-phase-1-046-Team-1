const {User, Role,  Package, UserPackage} = require('../models')
const bcrypt = require('bcryptjs');
const getDate = require('../helpers/getDate')
class UserController {
    static register (req, res) {
        res.render('login_regisForm',{title: 'Register', header: 'Create Account'})
    }
    static postRegister (req, res) {
        let obj = {
            firstName: req.body.firstName.trim(),
            lastName: req.body.lastName.trim(),
            email: req.body.email.trim(),
            password: req.body.password.trim(),
            createdAt: new Date(),
            updatedAt: new Date(),
            RoleId: 2
        }
        User.create(obj)
        .then(data => {
            res.redirect('/user/login')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static login (req, res) {
        let errors = req.app.locals.errors
        delete req.app.locals.errors
        res.render('login_regisForm',{title: 'Login',header: 'Login Page', errors})
    }
    static postLogin (req, res) {
        User.findOne({
            include: [Role],
            where : {
                email : req.body.email.trim()
            }
        })
        .then(data => {
            if(data){
                let flag = bcrypt.compareSync(req.body.password.trim(), data.password)
                if(flag){
                    req.session.user = data
                    res.redirect('/')
                }else{
                    res.app.locals.errors = 'Username/password is incorrect'
                    res.redirect('/user/login')
                }
            }else{
                res.app.locals.errors = 'Username/password is incorrect'
                res.redirect('/user/login')
            }
        })
        .catch(err => {
            res.send(err)
        })
    }
    static edit(req,res){
        User.findOne({
            where: {
                id: req.session.user.id
            }
        })
        .then(data => {
            let role = req.session.user.id
            res.render('user/template', {data, header: 'Edit Profil', role, getDate})
        })
        .catch(err => {
            res.send(err)
        })
    }
    static postEdit(req,res){
       let obj = {
           firstName: req.body.firstName.trim(),
           lastName: req.body.lastName.trim(),
           phone: req.body.phone.trim(),
           address: req.body.address.trim()
       }
       User.update(obj, {
           where: {
               id: req.session.user.id
           }
       })
       .then(data => {
           res.redirect('/')
       })
       .catch(err => {
           res.send(err)
       })
    }
    static create (req, res) {
        let packages
        Package.findAll()
        .then(data => {
            packages = data
            return User.findOne({
                where: {
                    id: req.session.user.id
                }
            })
        })  
        .then(data => {
            let role = req.session.user.id
            res.render('user/template',{packages, data, header: 'Create Request', role})
        })
        .catch(err => {
            res.send(err)
        })
        
    }
    static postCreate (req, res) {
        let obj = {
            UserId: req.session.user.id,
            PackageId: req.body.PackageId,
            status: false
        }
        UserPackage.create(obj)
        .then(data => {
            res.send('sukses')
           // res.redirect('/request/list')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static requestList (req, res) {
        UserPackage.findAll({
            include: [User],
            where: {
                UserId : req.session.user.id
            }
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {

        })
    }
}

module.exports = UserController