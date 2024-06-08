const usersModel = require('../models/usersModel');
const getuser = async (req,res) =>{
    const data = await usersModel.find();
    // console.log(data);
    console.log(req.url);
    res.send({
        status: 'success',
        results: 0,
        data: {
            products: data,
        }
    })
}

const postuser = async(req,res) =>{
    try {
        const data = await usersModel.create(req.body);
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

const putuser = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const data = await usersModel.update(reqId, data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                newUser: data,
            }
        });
    }
    catch(err){
        res.status(400);
        res.json({
            status: 'fail',
            message: err.message,
        });
    }
  }

  const deleteuser = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const data = await usersModel.delete(reqId);
        res.json({
            status: 'success',
            results: 1,
            data: {
                newUser: data,
            }
        });
    }
    catch(err){
        res.status(400);
        res.json({
            status: 'fail',
            message: err.message,
        });
    }
  }

module.exports = {
     getuser,
     postuser,
     putuser,
     deleteuser,
}