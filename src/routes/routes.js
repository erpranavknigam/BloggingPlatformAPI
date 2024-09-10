const express = require('express');
const { getBlogById, getAllBlogs, createBlog, updateBlogById, deleteBlogById } = require('../controller/blogcontroller');

const router = express.Router();

// Define the routes
router.get('/getBlogs', getAllBlogs);
router.get('/getBlog/:id', getBlogById);
router.post('/createBlog', createBlog);
router.put('/updateBlog/:id', updateBlogById);
router.delete('/deleteBlog/:id', deleteBlogById);

// Export the router
module.exports = router;
