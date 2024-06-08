const express = require('express')
const usercontroller = require('../controller/usercontroller.js')

const userRouter = express.Router();

userRouter.route('/')
        .get(usercontroller.getuser)
        .post(usercontroller.postuser)
        .put(usercontroller.putuser)
        .delete(usercontroller.deleteuser);


        
        module.exports = userRouter;