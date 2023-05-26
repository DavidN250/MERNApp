const express = require('express')
const { registerUser,getMe, loginUser } = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

// router.route('/').get(getUsers).post(registerUser)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

router.post('/',registerUser)
router.get('/me',protect,getMe)
router.post('/login',loginUser)

// router.put('/:id',updateGoal)
// router.delete('/:id',deleteGoal)

module.exports = router