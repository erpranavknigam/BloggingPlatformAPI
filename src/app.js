const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const blogRoutes = require('./routes/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/api/blogs', blogRoutes)

module.exports = app