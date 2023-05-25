const express = require('express')
const { registerUser,getUsers } = require('../controllers/userController')

const router = express.Router()

// router.route('/').get(getUsers).post(registerUser)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.get('/',getGoals)
router.post('/',registerUser)
// router.put('/:id',updateGoal)
// router.delete('/:id',deleteGoal)

module.exports = router