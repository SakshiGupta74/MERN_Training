const express = require('express')
const productcontroller = require('../controller/productscontroller.js')

const productRouter = express.Router();

productRouter.route('/')
.get(productcontroller.getAllProducts)
.post(productcontroller.addProduct);


productRouter.route('/:Id')
.put(productcontroller.putproduct)
.delete(productcontroller.deleteproduct);

module.exports = productRouter;
