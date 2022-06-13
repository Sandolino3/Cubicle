// const fs = require('fs/promises')
// const path = require('path')
// const mongoose = require('mongoose')

const Cube = require('../models/cubeModel')

exports.save = (cub)=>{
return Cube.create(cub)
}

exports.getOne = (id) => Cube.findById(id)

exports.getAll = (search = '',fromI, toI)=>{
    // let from = Number(fromI || 0)
    // let to = Number(toI || 6)
    // const result = cubes
    // .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(x => x.dificultyLevel >= from && x.dificultyLevel <= to )
    // // .filter(x => x.dificultyLevel < to)

    return Cube.find().lean()
}
