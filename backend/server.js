const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

// This 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middleware = use (goalRoutes to handle any endpoints that end with /api/goals)
app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})