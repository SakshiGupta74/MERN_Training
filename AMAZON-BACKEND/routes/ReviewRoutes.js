const express = require('express');

const ReviewController = require('../controllers/ReviewController.js');

const ReviewRouter = express.Router();

ReviewRouter.route('/')
    .get(ReviewController.getReview)
    .post(ReviewController.postReview);

ReviewRouter.route('/:id')
    .put(ReviewController.putReview)
    .delete(ReviewController.deleteReview);

    
    
    
// userRouter.route('/:id')     
//     .put(usersController.putuser)
//     .delete(usersController.deleteuser);
    
     

module.exports = ReviewRouter;