const Blogs = require('../model/blogs')

// Create a new blog
exports.createBlog = async (req, res) => {
    try {
        const { title, content, tags } = req.body

        const newBlog = new Blogs({
            title,
            content,
            tags
        })

        const savedBlog = await newBlog.save()
        res.status(201).json({
            message: "Blog Created Successfully",
            blog: savedBlog
        })

    } catch (ex) {
        res.status(500).json({ message: "Error Creating Blog", ex })
    }
}

// Get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const { term } = req.query;

        // Create a filter object
        let filter = {};

        // If a search term is provided, search in the 'title' or 'content' fields
        if (term) {
            filter = {
                $or: [
                    { title: { $regex: term, $options: 'i' } }, // Case-insensitive search
                    { content: { $regex: term, $options: 'i' } }
                ]
            };
        }

        const blogs = await Blogs.find(filter) // Await the result
        res.status(200).json(blogs)
    } catch (ex) {
        res.status(500).json({
            message: "Error fetching blog posts", ex
        })
    }
}

// Get a blog by ID
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blogs.findById(req.params.id) // Await the result
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" })
        }
        res.status(200).json(blog)
    } catch (ex) {
        res.status(500).json({
            message: "Error fetching blog", ex
        })
    }
}

// Update a blog by ID
exports.updateBlogById = async (req, res) => {
    try {
        const { title, content, tags } = req.body
        const { id } = req.params

        const updatedBlog = await Blogs.findByIdAndUpdate(id, {
            title,
            content,
            tags,
            updatedAt: Date.now()
        }, { new: true }) // Return the updated document

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" })
        }

        res.status(200).json({
            message: "Updated Successfully",
            blog: updatedBlog
        })
    } catch (ex) {
        res.status(500).json({ message: "Error updating blog", ex })
    }
}

// Delete a blog by ID
exports.deleteBlogById = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBlog = await Blogs.findByIdAndDelete(id) // Await the result

        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" })
        }

        res.status(200).json({ message: "Blog Deleted Successfully" })
    } catch (ex) {
        res.status(500).json({ message: "Error deleting blog", ex })
    }
}
