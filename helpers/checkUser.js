const {User, Role} = require('../models')

function checkUser() {
    let id = req.session.user
    User.findOne({
        include: [Role],
        where: {
            id 
        }
    })
    .then(data => {
        return data.RoleId
    })
    .catch(err => {
        return null
    })
}

module.exports = checkUser