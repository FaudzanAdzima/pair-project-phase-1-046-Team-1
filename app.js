const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3002
const session = require('express-session')
//const middleware = require('./middlewares/middleware')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}))

//app.use(middleware)

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})