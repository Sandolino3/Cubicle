const express = require('express');
const router = express.Router()
const homeControler = require('../controlers/homeControler')
const cubeControler = require('../controlers/cubeControler')
const articleControler = require('../controlers/articleControler')
const authControler = require('../controlers/authControler')

router.use('/', homeControler)
router.use('/cube',cubeControler)
router.use('/article',articleControler)
router.use('/auth',authControler)
router.use('*', (req,res)=>{
    res.render('404')
})



module.exports=router;