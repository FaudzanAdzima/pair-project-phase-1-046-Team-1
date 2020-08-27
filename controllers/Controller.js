const {User} = require("../models")
const bcrypt = require('bcryptjs');

class Controller {
    static home (req, res) {
        let error = []
        res.render('login',{error})
    }
    static login(req,res){
        // res.send(req.body)
        User.findOne({
            where:{
                username: req.body.username
            }
        })
        .then(data=>{
            
            if(data){
                // res.send(data)
                let flag = bcrypt.compareSync(req.body.password, data.password)
                // res.send(bcrypt.compareSync(req.body.password, data.password))
                if(flag){
                    res.redirect(`/users/order/${data.id}`)
                }else{
                    let error = ['Username / Password Salah']
                    res.render('login', {error})
                }   
            }else{
                let error = ['Username / Password Salah']
                res.render('login', {error})
            }
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = Controller