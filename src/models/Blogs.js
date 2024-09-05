const mongoose = require('mongoose')

const blogs = mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    tags: [String],
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type:Date,
        default:Date.now
    }
})

blogs.pre('save', function(next) {
    this.updatedAt = Date.now()
    next()
})

const Blogs = mongoose.model('Blogs', blogs)
module.exports = Blogs