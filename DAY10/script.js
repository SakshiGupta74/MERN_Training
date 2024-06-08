const express = require('express');
// const fs = require('fs');
const fsPromises = require("fs/promises");
const productcontroller = require('./controller/productscontroller.js');
const getsuser = require('./controller/usercontroller.js');
const productRouter = require('./routes/productRoute.js');
const userRouter = require('./routes/userRouter.js');


const app = express();

app.use(express.json());

app.use((req,res,next) => {
    // console.log("request received");
    const time = new Date().toLocaleString();
    fsPromises.appendFile('./log.txt',req.url+'\n'+time);
    next();
});

app.use('/api/products',productRouter);
app.use('/api/users',userRouter);





// const reqId = 3;
// const reqBody = {
//     'description': 'This is a machine',
//     'Date of Manufacturing': "21-2-2024",
//     'price': 20000,
// }

// const arr = [
//     {
//         Id :3,
//         title: 'Vaccum Cleaner',
//         price: 16000,
//     },
//     {
//         Id: 5,
//         title: 'Armani Watch',
//         price: 6000,
//     }
// ];

// const newArr = arr.map((elem) =>{
//     if(elem.Id === reqId){
//         reqBody.Id = reqId;
//         const newelem = {
//             ...elem,...reqBody,
//         }
//         return newelem;
//     }
// });


// const productrouter = express.Router();
// const userrouter = express.Router();

// app.use('/api/users',userrouter);

// productrouter.route('/')
// .get(productcontroller.getAllProducts)
// .post(productcontroller.addProduct);


// app.route('/api/products')

// app.route('/api/products/:Id')
// .delete( productcontroller.deleteproduct)
// .put( productcontroller.putproduct);


// app.route('/api/users')
// .get(getsuser.getuser)
// .post(getsuser.postuser)
// .put(getsuser.putuser)
// .delete(getsuser.deleteuser);

app.listen(4000);


