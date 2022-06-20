const router = require('express').Router();

// const res = require('express/lib/response');
const dataService = require('../services/dataService')


router.get ('/create',(req,res)=>{
    res.render('create')
})

router.post('/create', (req,res)=>{
    const cube = req.body
    if (cube.name.length < 2) {
       return res.status(400).send('Invalid request!')
    }
        dataService.save(cube)
        .then(()=>{
            res.redirect('/')
        })
        .catch(err=>{
            res.status(400).send(err)
        })
})

router.get('/:_id',async (req,res)=>{
 
    try {
        const cube = await dataService.getOne(req.params._id)
        console.log(cube)
        res.render('details', cube )

    } catch (e) {
        console.error(e);
    } 
})

module.exports = router;