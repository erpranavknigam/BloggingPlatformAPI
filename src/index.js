const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')
const blogRoutes = require('./routes/routes')

const app = express()
const result = env.config()

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        console.log("Some error occurred", err)
    })

// Middleware to parse JSON request bodies
app.use(express.json())

app.use('/api/v1', blogRoutes);  // Prefix the routes with /api/v1


app.listen(PORT, () => {
    console.log("App running on localhost port number: ", PORT)
})
