const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')
// const { getBlogById, getAllBlogs, createBlog, updateBlogById, deleteBlogById } = require('./controller/blogcontroller')
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

// Routes
// app.get('/api/v1/getBlogs', getAllBlogs)
// app.get('/api/v1/getBlog/:id', getBlogById)
// app.post('/api/v1/createBlog', createBlog)
// app.put('/api/v1/updateBlog/:id', updateBlogById)
// app.delete('/api/v1/deleteBlog/:id', deleteBlogById)
// Use the routes from routes.js
app.use('/api/v1', blogRoutes);  // Prefix the routes with /api/v1


app.listen(PORT, () => {
    console.log("App running on localhost port number: ", PORT)
})
