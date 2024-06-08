const express = require('express');
// const fs = require('fs');
const fsPromises = require("fs/promises");

const app = express();

app.get('/api/products', async (req, res) => {
    // const data = fs.readFileSync('./data.json',"utf-8");
    const data = await fsPromises.readFile('./data.json', "utf-8");
    const arr = JSON.parse(data);
    res.json(
        {
            status: 'success',
            results: arr.length,
            data: {
                products: arr
            }
        }
    )
});
app.use(express.json());
app.post('/api/products', async (req, res) => {

    //    console.log(Object.keys(req));
    // console.log(req.body);
    const data = req.body;
    // data.id = 134;
    // console.log(data);
if(!data.price || !data.title){
    res.json({
        status:'fails',
        message:'Title or price must be provided'
    })
}

    const db = await fsPromises.readFile("./data.json", "utf-8");
    const arr = JSON.parse(db);
    const len = arr.length;
    const newProduct = data;
    if (len == 0) {
        //     data.Id = 1;
        //     console.log(db)
        //     arr.push(data);
        //    console.log(arr)
        //    fsPromises.writeFile("./data.json",JSON.stringify(arr));
        newProduct.Id = 1;
    }
    else {
        const newProduct = data;;
        newProduct.Id = (arr[len - 1].Id) + 1;
    }
    arr.push(newProduct);
    fsPromises.writeFile("./data.json", JSON.stringify(arr));

    //    res.send('work in progress');
});


app.put('/api/products/:Id', async (req, res) => {
    const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));
    // res.send("work in progress....");
    const reqId = console.log(req.params.Id);
    const data = req.body;
    //    console.log(data);
    const NewArr = arr.map((elem) => {
        if (elem.Id == reqId) return data;
        else return elem;
    })
    fsPromises.writeFile("./data.json", JSON.stringify(NewArr));
    res.json({
        "status": 'success',
        results: arr.length,
        data: {
            newProduct: data
        }
    })
});

app.delete('/api/products/:Id', async (req, res) => {
    const reqId = parseInt(req.params.Id);
    const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));
    const newArr = arr.filter((elem) => {
        if (elem.Id == reqId) return false;
        else return true;
    });
    fsPromises.writeFile("./data.json", JSON.stringify(newArr));;
    res.send({
        "status": 'success',
        data: {
            newProduct: null
        }
    })
});
app.listen(1499);