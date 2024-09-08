const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    content:{
        type: String,
        required: true,
        trim: true
    },
    tag:{
        type: [String],
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        required:true,
        default: Date.now
    }
})

BlogSchema.pre('save', function(next) {
    this.updatedAt = Date.now()
    next()
})

const Blogs = mongoose.model('Blogs', BlogSchema)

module.exports = Blogs