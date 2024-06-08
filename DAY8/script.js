const express = require('express')

const app = express()
app.get('/products',(req,res) =>{
    res.end('<h1>welcome to the get</h1>'+'hey  '+req.query.name);
})

app.post('/products',(req,res) =>{
    res.end('<h1>welcome to the post</h1>');
})

app.patch('/products',(req,res) =>{
    res.end('<h1>welcome to the patch</h1>');
})

app.delete('/products',(req,res) =>{
    res.end('<h1>welcome to the delete</h1>');
})

app.listen(1500)