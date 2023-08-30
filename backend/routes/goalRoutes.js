const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalController')

// Goals Route or /api/goals

// router.get('/', getGoals)
// router.post('/', setGoals)
router.get('/').get(getGoals).post(setGoals)

// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)
router.route('/:id').delete(deleteGoals).put(updateGoals)


module.exports = router;