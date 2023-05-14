const express = require('express')
const router = express.Router()
const Task = require('../model/model')

router.post('/add', async (req,res) => {
    try{

        const task = await Task.create(req.body)
        res.status(201).json({message: "Task added",task: task})
    } catch(err){
        console.log('error while addding task from api', err);
    }
})

router.get('/all', async(req,res) => {
    try{
        const allTask = await Task.find({})
        res.status(200).json(allTask)
    } catch(err){
        console.log('error while getting all tasks', err)
    }
})

router.get('/edit/:id', async (req,res) => {
    try{
        const {id} = req.params
        const task = await Task.findById(id)
        res.status(201).json(task)
    } catch(err){
        console.log("error while fetching single task from server side", err)
    }
})

router.put('/edit/:id', async(req,res) => {
    const task = req.body
    await Task.updateOne({_id:req.params.id}, task)
    res.status(201).json({message:'Task updated'})
})

router.delete('/delete/:id', async(req,res) => {
    await Task.deleteOne({_id:req.params.id})
    res.status(201).json({message:"Task deleted"})
})
module.exports = router