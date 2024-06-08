const express = require("express");
const productRouter = require('./routes/productsRoutes.js');
const userRouter = require('./routes/usersRoutes.js');
const app = express();
// const test = require('./models/productsModel.js');
const mongoose = require('mongoose');
const ReviewRouter = require("./routes/ReviewRoutes.js");

app.use(express.json());
app.use('/api/products',productRouter);
app.use('/api/users',userRouter);
app.use('/api/Reviews',ReviewRouter);

// app.use('/api/products/:id',productRouter);

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.kujy4sc.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser = 'root';
const databasePassword = 'sakshi123';
const databaseName = 'AMAZON-BACKEND';

let dbLink = url.replace("$_USERNAME_$",databaseUser);
 dbLink = dbLink.replace("$_PASSWORD_$",databasePassword);
 dbLink = dbLink.replace("$_DB_NAME_$",databaseName);

 mongoose.connect(dbLink)
 .then(
    () => console.log('----------Database Connected-----------------')
 );
 
app.listen(1400,
() =>console.log('------App Started-------')
);