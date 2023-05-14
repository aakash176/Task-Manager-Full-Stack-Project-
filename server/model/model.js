const mongoose = require('mongoose')

const Task = new mongoose.Schema({
    TaskName:{type:String},
    DOC:{type:Date}
})

module.exports = mongoose.model('tasks', Task)