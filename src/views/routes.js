const express = require('express');
const router = express.Router()
const homeControler = require('../controlers/homeControler')
const aboutControler = require('../controlers/aboutControler')
const createControler = require('../controlers/createControler')

router.get('/',homeControler.index)
router.get('/about',aboutControler.about)
router.get('/create',createControler.create)


module.exports=router;