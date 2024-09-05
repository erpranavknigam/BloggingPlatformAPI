const Blogs = require('../models/Blogs');

const CreateBlog = async (req, res) => {
    try {
        const { title, content, category, tags } = req.body;
        const blog = new Blogs({ title, content, category, tags });
        await blog.save();
        res.status(201).json(blog);
    } catch (ex) {
        res.status(400).json({ message: ex.message });
    }
};

const GetBlogs = async (req, res) => {
    try {
        const term = req.query.term || '';
        const blogs = await Blogs.find({
            $or: [
                { title: { $regex: term, $options: 'i' } },
                { content: { $regex: term, $options: 'i' } },
                { category: { $regex: term, $options: 'i' } }
            ]
        });
        res.status(200).json(blogs);
    } catch (ex) {
        res.status(500).json({ message: ex.message });
    }
};

const GetBlogById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("Fetching blog with ID:", id);
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
        const blog =  Blogs.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(blog);
    } catch (ex) {
        res.status(500).json({ message: ex.message });
    }
};

const UpdateBlog = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("Update:", id)
        const blog = await Blogs.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Invalid Blog Id" });
        }
        const { title, content, category, tags } = req.body;
        blog.title = title;
        blog.content = content;
        blog.category = category;
        blog.tags = tags;
        blog.updatedAt = Date.now();

        await blog.save();
        res.status(200).json(blog);
    } catch (ex) {
        res.status(400).json({ message: ex.message });
    }
};

const DeleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("Delete", id)
        const blog = await Blogs.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        await blog.remove();
        res.status(204).send();
    } catch (ex) {
        res.status(500).json({ message: ex.message });
    }
};

module.exports = {
    CreateBlog,
    GetBlogs,
    GetBlogById,
    UpdateBlog,
    DeleteBlog
};
