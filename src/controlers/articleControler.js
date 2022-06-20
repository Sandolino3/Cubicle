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

router.get('/:id/attach', async (req,res)=>{
    const cube = await dataService.getOne(req.params.id).lean()
    const accsessorys = await dataService.getAllAccsessorys()
    res.render('attachAccessory', {cube, accsessorys})
})

router.post('/:id/attach',async (req,res)=>{
const accsId = req.body.accessory
const cubeId = req.params.id
await dataService.attachAccs(cubeId, accsId)
// console.log(accsId);
res.redirect('/')
})

module.exports = router;