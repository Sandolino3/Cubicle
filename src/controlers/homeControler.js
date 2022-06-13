const express = require('express');
const router = express.Router()
const dataService = require('../services/dataService')

router.get('/',async (req,res)=>{    
    let {search,from,to} = req.query;

    const cubes = await dataService.getAll(search,from,to)

    res.render('index', {cubes})

})

router.get('/about',(req,res)=>{
    res.render('about')
})


module.exports=router