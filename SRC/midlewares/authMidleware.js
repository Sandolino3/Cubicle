const jwt = require('jsonwebtoken')
const {secret,sesionName} = require('../config')
const{promisify} = require('util')

const jwtVerify = promisify(jwt.verify)


exports.auth = async (req,res,next)=>{
    let token = req.cookies[sesionName]
    if (token) {
        try {
            let decodetToken = await jwtVerify(token, secret)
            req.user = decodetToken
            res.locals.user = decodetToken
        } catch (error) {
            return res.redirect('/404')
        }

    }
    next()
}

exports.isAuth = (req, res, next)=>{
    if (!req.user) {
        return res.redirect('/404')
    }
   next()
}

// exports.isOwner = (req,res,next) =>{
//     if(req.user._id !== req.params.id){
//        return res.redirect('/404')
//     };
//     next()
// }