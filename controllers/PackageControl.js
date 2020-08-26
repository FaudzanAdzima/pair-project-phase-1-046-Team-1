const {Package} = require("../models")

class PackageControll {
    static show(req,res){
        Package.findAll()
        .then(data=>{
            res.render('packages',{data})
        })
    }
}

module.exports = PackageControll