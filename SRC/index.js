const express = require('express')

const app = express()

app.use('/static',express.static('piblic'))


app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen('5000',()=>{console.log("Server start on port 5000....");})