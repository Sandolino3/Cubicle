const express = require('express');
const router = express.Router()
const homeControler = require('../controlers/homeControler')

router.get('/',homeControler.index)
router.get('/about',homeControler.about)
router.get('/create',homeControler.create)


module.exports=router;