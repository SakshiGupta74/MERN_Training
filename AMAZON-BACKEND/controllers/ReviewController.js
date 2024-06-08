const ReviewModel = require('../models/ReviewModel.js');
const getReview = async (req,res) =>{
    const reqId = req.params.id;
    const data = { ...req.body, _id: reqId };
    const results = await ReviewModel.find({ _id: reqId }, data);
    // console.log(data);
    console.log(req.url);
    res.send({
        status: 'success',
        results: 0,
        data: {
            products: results,
        }
    })
}

const postReview = async(req,res) =>{
    try {
        const data = await ReviewModel.create(req.body);
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

const putReview = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const data = await ReviewModel.update(reqId, data);
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

  const deleteReview = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const data = await ReviewModel.delete(reqId);
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
     getReview,
     postReview,
     putReview,
     deleteReview,
}