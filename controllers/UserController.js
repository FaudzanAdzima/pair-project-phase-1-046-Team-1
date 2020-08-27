const {User, Package, Staff, UserPackage} = require("../models")

class UserController {
    static show(req,res){
        User.findAll({
            order: [['firstName', 'ASC']]
        })
        .then(data=>{
            res.render('userlist',{data})
        })
    }
    static register(req,res){
        res.render('registerForm')
    }
    static registPost(req,res){
        // res.send(req.body)
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address,
            createdAt: new Date,
            updatedAt: new Date,
            username: req.body.username
        })
        .then(()=>{
            res.redirect('/users')
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static order(req,res){
        let packages
        let staff
        Package.findAll()
        .then(data=>{
            // res.send(data)
            packages = data
            return Staff.findAll()
            
        })
        .then(data=>{
            staff = data
            // res.send(packages)
            return User.findByPk(req.params.id,{
                include: [UserPackage]
            })
        })
        .then(user =>{
            // res.send(user)
            res.render('order', {packages, staff,user})
        })   
    }
    static userpackage(req,res){
        res.send(req.body)
    }
    static edit(req,res){
        // res.send(req.params)
        User.findByPk(req.params.id)
        .then(data=>{
            // res.send(data)
            data = [data]
            res.render('editUser',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static editPost(req,res){
        // res.send(req.body)
        User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address,
            username: req.body.username
        },{
            where:{
                id: req.body.id
            }
        })
        .then(()=>{
            res.redirect('/users')
        })
        .catch(err=>{
            res.send(err)
            console.log(err)
        })
    }

    static delete(req,res){
        User.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(data=>{
            res.redirect('/users')
        })
        .catch(err=>{
            res.send(err)
        })
    }

}

module.exports = UserController