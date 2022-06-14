const router = require('express').Router()

router.get('/create',(req,res)=>{
    res.render('createAccessory')
    // console.log('jhhjkh');
})

module.exports = router;