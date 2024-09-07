const express = require('express')

const app = express()

app.get('/api/v1', () => {
    console.log("Home Page")
})

app.listen('3000',() => {
    console.log("App running on localhost port number 3000")
})
