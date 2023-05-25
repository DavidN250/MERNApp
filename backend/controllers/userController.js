
//@desc   setGoal
//@route  POST api/getgoals
//@acess  Private
const registerUser = (req,res)=>{
    res.json({message:'User Created'})
}

//@desc   setGoal
//@route  POST api/getgoals
//@acess  Private
const getUser = (req,res)=>{
    res.json({message:'User'})
}


//@desc   setGoal
//@route  POST api/getgoals
//@acess  Private
const loginUser = (req,res)=>{
    res.json({message:'User logged in'})
}






module.exports = {
     registerUser
}