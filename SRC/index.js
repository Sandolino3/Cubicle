const express = require('express')
const handlebars = require('express-handlebars')
const routes = require('./views/routes')
// const homeControler = require('./controlers/homeControler')


const app = express()

app.use(express.static('./src/public'))

app.use(express.urlencoded({extended:false}))

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views','./src/views')


app.use(routes)

// app.get('/', homeControler.index)
// app.get('/create', (req,res)=>{
//     res.render('create')
// })
// app.get('/about',(req,res)=>{
//     res.render('about')
// })

app.listen('5000',()=>{console.log("Server start on port 5000....");})