const express = require('express')
const routes = require('./views/routes')
// const homeControler = require('./controlers/homeControler')
const cookieParser = require('cookie-parser')

const {initDatabase} = require('./config/database')
const{auth} = require('./midlewares/authMidleware')


const app = express()

app.use(express.static('./src/public'))
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

require('./config/handlebars')(app)

app.use(auth)
app.use(routes)

// app.get('/', homeControler.index)
// app.get('/create', (req,res)=>{
//     res.render('create')
// })
// app.get('/about',(req,res)=>{
//     res.render('about')
// })

initDatabase ()
.then(()=>{
app.listen('5000',()=>{console.log("Server start on port 5000....");})
})
.catch((err)=>{
    console.log(err);
})