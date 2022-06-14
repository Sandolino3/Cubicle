const router = require('express').Router()
const dataService = require('../services/dataService')

router.get('/create',(req,res)=>{
    res.render('createAccessory')
    // console.log('jhhjkh');
})

router.post('/create',async (req,res)=>{
    const accsessory = req.body

    await dataService.createAccsessory(accsessory)
    res.redirect('/')
})

module.exports = router;