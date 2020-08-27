const {User, Role} = require('../models')
const bcrypt = require('bcryptjs');
class UserController {
    static register (req, res) {
        res.render('templateUser',{title: 'Register', header: 'Create Account'})
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
        res.render('templateUser',{title: 'Login',header: 'Login Page', errors})
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
}

module.exports = UserController