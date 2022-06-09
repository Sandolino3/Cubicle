const express = require('express');
const router = express.Router()
const homeControler = require('../controlers/homeControler')
const cubeControler = require('../controlers/cubeControler')

router.use('/', homeControler)
router.use('/cube',cubeControler)


module.exports=router;