const express = require('express')
// Not require
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001
const app = express()

const {errorHandler} = require('./middleware/errorMiddleware') // Not require
const connectDB = require('./config/db')

connectDB()
// This 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middleware = use (goalRoutes to handle any endpoints that end with /api/goals) - Resources 
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler) // Not require

app.listen(port, () => { console.log(`Server started on port http://localhost:${port}`)})