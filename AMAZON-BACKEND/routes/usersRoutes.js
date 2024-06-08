const express = require('express');

const ReviewController = require('../controllers/usersController.js');

const userRouter = express.Router();

userRouter.route('/')
    .get(ReviewController.getuser)
    .post(ReviewController.postuser);
    
    
    
// userRouter.route('/:id')     
//     .put(usersController.putuser)
//     .delete(usersController.deleteuser);
    
     

module.exports = userRouter;