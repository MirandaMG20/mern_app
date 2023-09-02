const path = require('path')
const express = require('express')
const app = express()
const colors = require('colors') // Not require
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware') // Not require
const connectDB = require('./config/db')

const port = process.env.PORT || 3002

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`)
})

connectDB()

// This 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middleware = use (goalRoutes to handle any endpoints that end with /api/goals) - Resources 
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serve Frontend

app.use(errorHandler) // Not require
