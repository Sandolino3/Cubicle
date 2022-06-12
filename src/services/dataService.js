const fs = require('fs/promises')
const cubes = require('../db.json')
const path = require('path')
const mongoose = require('mongoose')

exports.save = (cube)=>{

    cubes.push({_id: cubes[cubes.length -1]._id + 1,...cube})

    return fs.writeFile(path.resolve('src','db.json'), JSON.stringify(cubes,'',4),{encoding:'utf-8'})

}

exports.getOne = (id) => cubes[id]

exports.getAll = (search = '',fromI, toI)=>{
    let from = Number(fromI || 0)
    let to = Number(toI || 6)
    const result = cubes
    .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    .filter(x => x.dificultyLevel >= from && x.dificultyLevel <= to )
    // .filter(x => x.dificultyLevel < to)

    return result
}