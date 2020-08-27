class Controller {
    static home (req, res) {
        res.render('login')
    }
    static login(req,res){
        res.send(req.body)
    }
}

module.exports = Controller