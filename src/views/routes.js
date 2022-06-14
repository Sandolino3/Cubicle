const express = require('express');
const router = express.Router()
const homeControler = require('../controlers/homeControler')
const cubeControler = require('../controlers/cubeControler')
const articleControler = require('../controlers/articleControler')

router.use('/', homeControler)
router.use('/cube',cubeControler)
router.use('/article',articleControler)


module.exports=router;