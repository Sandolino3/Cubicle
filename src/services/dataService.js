const fs = require('fs/promises')
const cubes = require('../db.json')
const path = require('path')

exports.save = (cube)=>{

    cubes.push({_id: cubes[cubes.length -1]._id + 1,...cube})

    return fs.writeFile(path.resolve('src','db.json'), JSON.stringify(cubes,'',4),{encoding:'utf-8'})

}

exports.getOne = (id) => cubes[id]