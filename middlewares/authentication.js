const authentication = (req, res, next) => {
    console.log(`at url : ${req.originalUrl}`);
    if(req.session.user){
      next()
    }else{
      req.app.locals.errors = `You don't have any access, please login`
      res.redirect('/user/login')
    }
    
  }

module.exports = authentication