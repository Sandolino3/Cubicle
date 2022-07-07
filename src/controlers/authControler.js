const router = require('express').Router()
const authService = require('../services/authService')
const {sesionName} = require('../config')

router.get('/login', (req,res)=>{
    res.render('loginPage')
})
router.post('/login',async (req,res)=>{
    let token = await authService.login(req.body)
    // console.log(token)
    if (!token) {
       return res.redirect('/404')
    }
    res.cookie(sesionName, token, {httpOnly: true})
    res.redirect('/')
})

// router.get('/logout', (req,res)=>{
//     res.render('loginPage')
// })

router.get('/register', (req,res)=>{
    res.render('registerPage')
})

router.post('/register',async (req,res)=>{
    // const {username, password,rePassword} = req.body
    // if (password === rePassword) {
    //    const create = await authService.register(username,password)
    //    console.log(create);
    // }

    const create = await authService.register(req.body)
    if (create) {
        res.redirect('/auth/login')
    }else{
        res.redirect('/404')

    }
    
})

module.exports = router