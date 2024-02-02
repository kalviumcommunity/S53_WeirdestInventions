const mongoose = require('mongoose')

const Invention = mongoose.model('Invention',{
    inventionName: {
        type: String,
        required: true
    },
    yearOfInvention: Number,
    nameOfInventor: {
        type: String,
        required: true
    },
    reactions: [],
    
    comments: String
})

module.exports = Invention