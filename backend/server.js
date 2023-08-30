const express = require('express')
// Not require
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

const {errorHandler} = require('./middleware/errorMiddleware') // Not require
const connectDB = require('./config/db')

connectDB()
// This 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middleware = use (goalRoutes to handle any endpoints that end with /api/goals)
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler) // Not require

app.listen(port, () => { console.log(`Server started on port ${port}`)})