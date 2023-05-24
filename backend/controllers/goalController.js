const asyncHandler = require(express-async-handler)
//@desc   getGoals
//@route  GET api/getgoals
//@aCcess Private

const getGoals = asyncHandler(async (req,res) =>{
    res.json({message:'Goals List'})
})

//@desc   setGoal
//@route  POST api/getgoals
//@acess  Private

const setGoal = asyncHandler(async (req,res) =>{

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }
   res.json({message:'Goal Created'})
})


//@desc   updateGoal
//@route  PUT api/getgoals/:id
//@acess  Private

const updateGoal = asyncHandler(async (req,res) =>{
    res.json({message:`Goal ${req.params.id} Updated`})
})


//@desc   deleteGoal
//@route  DELETE api/getgoals/:id
//@acess  Private

const deleteGoal = asyncHandler(async (req,res) =>{
    
    res.json({message:`Goal ${req.params.id} Deleted`})
})


module.exports =  {
    getGoals,setGoal,updateGoal,deleteGoal
}