const {User} = require('../models')

class Controller {
    static home (req, res) {
        if(req.session.user){
            User.findOne({
                where: {
                    id : req.session.user.id
                }
            })
            .then(data => {
                let role = req.session.user.RoleId
                res.render('home', {data, role})
            })
            .catch(err => {
                res.send(err)
            })
        } else {
            res.redirect('/user/login')
        }

    }
    static logout (req, res) {
        req.session.destroy(function(err) {
            if(err){
                res.send(err)
            }else{
                res.redirect('/user/login')
            }
          })
    }
}

module.exports = Controller