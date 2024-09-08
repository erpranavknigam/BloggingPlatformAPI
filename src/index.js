const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')

const app = express()
const result = env.config()

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
.then(res=>{
    console.log("Connected to MongoDB")
})
.catch(err=>{
    console.log("Some error occurred", err)
})

app.get('/api/v1', () => {
    console.log("Home Page")
})

app.listen(PORT, () => {
    console.log("App running on localhost port number: ", PORT)
})
