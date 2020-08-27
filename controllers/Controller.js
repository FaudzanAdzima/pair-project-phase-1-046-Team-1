const {User} = require("../models")

class Controller {
    static home (req, res) {
        let error = []
        res.render('login',{error})
    }
    static login(req,res){
        // res.send(req.body)
        User.findAll({
            where:{
                username: req.body.username
            }
        })
        .then(data=>{
            if(req.body.password === data[0].password){
                res.redirect(`/users/order/${data[0].id}`)
            }else{
                let error = ['Username atau Password salah']
                res.render('login', {error})
            }
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = Controller