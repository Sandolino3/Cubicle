// const fs = require('fs/promises')
// const path = require('path')
// const mongoose = require('mongoose')

const Cube = require('../models/cubeModel')
const Accsessory = require('../models/articleMocel')

exports.save = (cub)=>{
return Cube.create(cub)
}

exports.getOne = (id) => Cube.findById(id).populate('accsessories')




exports.getAll = (search = '',fromI, toI)=>{
    // let from = Number(fromI || 0)
    // let to = Number(toI || 6)
    // const result = cubes
    // .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(x => x.dificultyLevel >= from && x.dificultyLevel <= to )
    // // .filter(x => x.dificultyLevel < to)

    return Cube.find().lean()
}


exports.createAccsessory = (data)=>{
    Accsessory.create(data)
}

exports.getAllAccsessorys = ()=>{
    return Accsessory.find().lean()
}

exports.attachAccs = async (cubeId, accsesId)=>{
    const cube = await Cube.findById(cubeId)
    const accsessory = await Accsessory.findById(accsesId)

    cube.accsessories.push(accsessory)
    accsessory.cubes.push(cube)
    
    await cube.save();
    await accsessory.save();

    return cube;
}