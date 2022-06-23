const User = require('../models/userModel')
const bcrypt = require('bcrypt')

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