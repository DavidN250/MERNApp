const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//@desc   getGoals
//@route  GET api/getgoals
//@aCcess Private

const getGoals = asyncHandler(async (req,res) =>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})

//@desc   setGoal
//@route  POST api/getgoals
//@acess  Private

const setGoal = asyncHandler(async (req,res) =>{

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }

    const goal = await Goal.create({
        text:req.body.text
    })

   res.status(201).json(goal)
})


//@desc   updateGoal
//@route  PUT api/getgoals/:id
//@acess  Private

const updateGoal = asyncHandler(async (req,res) =>{

    const goal = Goal.findById(req.params.id)

    if(!goal){
        res.status(404)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{new:true})

    res.json(updatedGoal)
})


//@desc   deleteGoal
//@route  DELETE api/getgoals/:id
//@acess  Private

const deleteGoal = asyncHandler(async (req,res) =>{

    const goal = Goal.findById(req.params.id)

    if(!goal){
        res.status(404)
        throw new Error('Goal not found')
    }

    await Goal.findOneAndDelete(req.params.id)
    
    res.json({id:req.params.id})
})


module.exports =  {
    getGoals,setGoal,updateGoal,deleteGoal
}