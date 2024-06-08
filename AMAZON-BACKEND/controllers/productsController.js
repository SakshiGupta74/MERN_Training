
const productModel = require('../models/productsModel.js');

const getAllProducts = async (req, res) => {

    const {sort = 'price',page =1,pagesize =3,fields = '-info',...q} = req.query;
    const sortStr = sort.split(',').join(' ');
    const fieldsStr = fields.split(',').join(' ');

    // console.log(q);
    // const data = await productModel.find();
    //       data = data.find(q);
    // console.log(data);

    let query = productModel.find(q);
    query = query.sort(sortStr);
    // query = query.select('title price');
    query = query.select(fieldsStr);

    const skip = pagesize*(page-1);
    limit =3;

    query = query.skip(skip).limit(pagesize);

    const Data = await query;
    const totalresults = await productModel.countDocuments();


    // console.log(query);
    // console.log(products);
    // console.log(req.url);
    res.send({
        status: 'success',
        results: 0,
        data: {
            products:Data,
        },
        totalresults,
        pagesize,
        page,
    })
}


const addProduct = async (req, res) => {
    try {
        const data = await productModel.create(req.body);
        console.log(data);
        console.log(req.body);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: data,
            }
        })
    }

    catch (err) {
        res.status(403);
        console.log(err);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),

        })
    }
}

const replaceProduct = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, _id: reqId };
        // console.log(data);
        // console.log(reqId);
        const results = await productModel.findOneAndReplace({ _id: reqId }, data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: results,
            }
        })
    }
    catch (err) {
        res.status(500);
        console.log(err);
        res.json({
            status: 'success',
            message: JSON.stringify(err),
        })

    }
}
const deleteProduct = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, _id: reqId };
        const results = await productModel.findOneAndDelete({ _id: reqId }, data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: results,
            }
        })
    }
    catch (err) {
        res.status(400);
        console.log(err);
        res.json({
            status: 'success',
            message: JSON.stringify(err),
        })

    }

}

const updateProduct = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, _id: reqId };
        const results = await productModel.findOneAndUpdate({ _id: reqId }, data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: results,
            }
        }

        )
    }
    catch (err) {
        res.status(400);
        console.log(err);
        res.json({
            status: 'success',
            message: JSON.stringify(err),
        })

    }

}
module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    deleteProduct,
    updateProduct,
}

//nosql and sql difference