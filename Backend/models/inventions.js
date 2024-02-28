const mongoose = require('mongoose')

const Invention = mongoose.model('Invention',{
    imgUrl:{
        type: String,
        required :true
    },
    inventionName: {
        type: String,
        required: true
    },
    descriptionOfInvention:{
        type: String,
        required:true
    },
    comments: [{
        description: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }],
    email:{
        type: String,
        required:true
    },
})

module.exports = Invention