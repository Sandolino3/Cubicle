const mongoose = require('mongoose')
const conectionString = 'mongodb://localhost:27017/cubicle'


exports.initDatabase = ()=> mongoose.connect(conectionString)