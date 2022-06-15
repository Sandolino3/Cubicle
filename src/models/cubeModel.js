const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
    // _id:mongoose.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        maxlength: 120,
    },
    imageURL:{
        type: String,
        required: true,
        validate: {
            validator: /^https?/g,
            message: 'path should be URL'
        }
    },
    difficultyLevel:{
        type: Number,
        required: true,
        min:1,
        max:6,
    },
    accsessories:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accsessory'
        }
    ]
})

// cubeSchema.path('imageURL').validate(function(){
//     return this.name.startsWith('http')
// }, 'URL shuld be a link!')

const Cube = mongoose.model('Cube',cubeSchema)

module.exports = Cube;