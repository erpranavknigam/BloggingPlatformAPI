const express = require('express')
const {uri, port} = require('./config/config')
const connectDB = require('./config/dbconfig');
const app = require('./app')

const PORT = port

// Connect to the database
connectDB();



app.listen(PORT,() => {
    console.log("Application running on port 3000")

})