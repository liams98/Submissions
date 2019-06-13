const mongoose = require('mongoose')

movieSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title: String,
    year: Number,
    rating: Number
 })

module.exports = mongoose.model('Movie', movieSchema)