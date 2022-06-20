const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
name:{
    type: String,
    required: true,
},

description:{
    type: String,
    required: true,
    maxlength: 120,
},
imageUrl:{
    type: String,
    required: true,
    validate: {
        // validator: /^https?/g,
        validator: function() {
            return this.imageUrl.startsWith('http')
        },
        message: 'path should be URL'
    }
},
cubes:[
    {
    type: mongoose.Types.ObjectId,
    ref:'Cube'
    }
],
})

const Accsessory = mongoose.model('Accsessory', articleSchema)

module.exports = Accsessory