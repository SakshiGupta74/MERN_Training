// console.log("hello");

const fs = require("fs");
const http = require("http");
const url = require('url');
// const path = require("path");
const data = fs.readFileSync("./data.json","utf-8");
const dataObj = JSON.parse(data).products;
// console.log(dataObj);

const inputelement = `
<form>
    <input type = "text" name = "productName">
    <button type = "submit">search</button>
    </form>
`;

const cardTemplate =`
<style>
img{
      height:250px;
      width:250px;
}
</style>
<div class = 'product-card'>
<h3>TITLE</h3>
<img src="IMG" alt='product-image'>
<a href="HREF">More Info</a>
</div>
`;

let result = [];
for(let i=0;i<dataObj.length;i++)
{
    let temp = cardTemplate;
    temp = temp.replace('TITLE',dataObj[i].title);
    temp = temp.replace('IMG',dataObj[i].images[0]);
    temp = temp.replace('HREF',`/product?id=${i}`);
    result.push(temp);
}

result = result.join(' ');
const server = http.createServer((req,res) =>{
      // const q = path.query;
      res.writeHead(200,{
            'content-type':'text/html',
      });
      const {pathname,q} = url.parse(req.url,true);
      // console.log('\n',query,'\n');
      if(pathname == '/home'){
            res.end(inputelement+result);

      }
      else if(pathname == '/product'){
            const id = q.id;
            const pname = q.productName;
            // const productdata = dataObj[id];
            // if(id){
            //       res.end(`
            //        <div>
            //              <h2>${productdata.title}</h2>
            //              <h4>${productdata.description}</h4>
            //              <img src="${productdata.images[0]}">
            //              <h5>${productdata.price}</h5>
            //              <h5>${productdata.brand}</h5>
            //              <h5>${productdata.category}</h5>
                        
            //        </div>
            // `);
            //  }
            if(pname){
                  const searchNameResult = dataObj.filter((elem) => {
                        if(elem.title.includes(pname)){
                              return true;
                        }
                        else{
                              return false;
                        }
                  })
                  res.end(JSON.stringify(searchNameResult));
            }
            else{
                  res.end('<h3>Error...</h3>');
            }
            // res.end(`
            //       <div>
            //             <h2>${productdata.title}</h2>
            //             <h4>${productdata.description}</h4>
            //             <img src="${productdata.images[0]}">
            //             <h5>${productdata.price}</h5>
            //             <h5>${productdata.brand}</h5>
            //             <h5>${productdata.category}</h5>
                        
            //       </div>
            // `);
            // // res.end('product page',+productdata.title);
      }
      else{
            res.end('404....Not Found');
      }
});

server.listen(2300);

