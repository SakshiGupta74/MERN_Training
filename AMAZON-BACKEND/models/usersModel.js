const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
   username: {
        type: String,
        unique:true,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
        id:{
            type:Number,
            required:true,

        },
        createdAt:{
            type:Date,
            default:new Date(),
        },
        images:[String],
        updatedAt:{
            type:Date,
            default:new Date(),
        }
    });
const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;