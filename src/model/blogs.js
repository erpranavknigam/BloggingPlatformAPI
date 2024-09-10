const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    tags: { // Changed to tags for consistency
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

// Middleware to update the 'updatedAt' field before saving
BlogSchema.pre('save', function(next) {
    this.updatedAt = Date.now()
    next()
})

const Blogs = mongoose.model('Blogs', BlogSchema)
module.exports = Blogs
