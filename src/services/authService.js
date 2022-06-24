const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = 'jashdjkasdhjasldhasdjlh'

exports.register = async ({username,password,repeatPassword})=>{
    // User.create(user)

    if (password !== repeatPassword) {
        return false
    }
    let hashPass = await bcrypt.hash(password, 10)
    let createUser = User.create({
        username,
        password: hashPass,
    })
    return createUser
}

exports.login = async ({username,password})=>{
    let user = await User.findOne({username})

    if (!user) {
       return
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        return 
    }
    let result = new Promise((reslove, reject)=>{
        jwt.sign({_id: user._id, username: user.username}, secret, {expiresIn: '2d'}, (err, token)=>{
           
            if(err){
               return reject(err)
            }
            reslove(token)
        })

    })
    return result
}