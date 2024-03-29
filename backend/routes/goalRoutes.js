// Importing Dependencies and Controllers
const express = require('express')
const router = express.Router()
const {getGoals, setGoals , updateGoals , deleteGoals} = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')

// Route Definitions
router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect , updateGoals).delete(protect, deleteGoals)


module.exports = router