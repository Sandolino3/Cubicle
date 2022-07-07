const router = require('express').Router();

// const res = require('express/lib/response');
const dataService = require('../services/dataService')
const {isAuth} = require('../midlewares/authMidleware')

router.get ('/create', isAuth, (req,res)=>{
    res.render('create')
})

router.post('/create', (req,res)=>{
    const cube = req.body
    const ownerId = req.user._id
  
    cube.owner = ownerId
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
        res.render('details', cube )

    } catch (e) {
        console.error(e);
    } 
})

router.get('/:id/edit',isAuth,async (req,res)=>{


    const cube = await dataService.getOne(req.params.id).lean()
  
    if (cube.owner != req.user._id) {
        return res.redirect('/404')
    }
    
    res.render('editCubePage',{cube})

})
router.post('/:id/edit', async(req,res)=> {

    let modifiedCube = await dataService.edit(req.params.id, req.body)

    res.redirect('/')
})

module.exports = router;