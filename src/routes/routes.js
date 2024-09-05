const express = require('express')
const blogController = require('../controllers/BlogControllers')

const router = express.Router()


router.post('/',blogController.CreateBlog)
router.get('/',blogController.GetBlogs)
router.get('/:id',blogController.GetBlogById)
router.put('/:id', blogController.UpdateBlog)
router.delete('/:id', blogController.DeleteBlog)

module.exports  = router