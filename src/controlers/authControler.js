const router = require('express').Router()
const authService = require('../services/authService')

router.get('/login', (req,res)=>{
    res.render('loginPage')
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