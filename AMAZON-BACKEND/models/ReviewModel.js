const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
   title: {
        type: String,
        unique:true,
        required:true,
    },
    rating: {
        type:Number,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },

        createdAt:{
            type:Date,
            default:new Date(),
        },
        content:String,
        updatedAt:{
            type:Date,
            default:new Date(),
        }
    });
const ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = ReviewModel;