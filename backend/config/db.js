const mongoose = require('mongoose')

// Responsible for connecting to the MongoDB database specified in the process.env.MONGO_URI environment variable.
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB