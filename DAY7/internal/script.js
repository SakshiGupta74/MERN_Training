// const fs = require('node:fs');
// const data = fs.readFileSync('./myReadMe.txt');
// console.log(data);
// console.log(data.toString());


// const fs = require('fs');

// const data = fs.readFileSync('./myReadMe.txt',{encoding:'utf-8'});

// console.log(data);

// const fs = require('fs');
// fs.writeFileSync('./log.txt',"10th April 2024:DAY7");

//promises:=
// const fsPromises = require('fs/promises');
// console.log("start");
// const pr=fsPromises.readFile('./myReadMe.txt',{encoding:'utf-8'});
// console.log(pr);
// pr.then((res) => {
//     console.log(res);
// })
// console.log("End");

// const fs = require('fs');
// fs.readFile('./myReadMe.txt',{encoding:'utf-8'},(err,data)=>{
//     console.log(data);
// });


// const htmlTemplate=`
// <!DOCTYPE HTML>
// <html>
// <head>
// <style>
// .product-card{
//     max-width:500px;
//     margin:20px auto;
//     border:3px double darkblue;
//     border-radius:8px;
//     padding:16px;
// }
// </style>
// </head>
//<body>
//__PRODUCTS__CARDS__
//</body>
// </html>
// `

// const cardTemplate=`
// <!DOCTYPE HTML>
// <html>
// <head>
// </head>
// <body>
// <div class='product-card'>
// <h4>__TITLE___</h4>
// <P>__PAGE</P>
// </div>
// </body>
// </html>
// `
// const card1 = cardTemplate
//                          .replace('__TITLE___',products[0].title)
//                          .replace('__PAGE',products[0].description);
//  const card2=cardTemplate
//                          .replace('__TITLE___',products[1].title)                         
//                          .replace('__PAGE',products[1].description);
//  const card3=cardTemplate
//                          .replace('__TITLE___',products[2].title)                         
//                          .replace('__PAGE',products[2].description);
//  const allcards=card1+card2+card3;                        
//  const page = htmlTemplate.replace('__PRODUCTS__CARDS__',allcards);

const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync('./data.json',{encoding:'utf-8'});
const mainTemplate = fs.readFileSync('./templates/main.html',{encoding:'utf-8'});
const cardTemplate = fs.readFileSync('./templates/card.html',{encoding:'utf-8'});

const dataobj = JSON.parse(data);
const products = dataobj.products;
// console.log(products);


const allcards = products.map((elem) =>{
    let newcard = cardTemplate;
     newcard = newcard.replace('__TITLE___',elem.title);
     newcard = newcard.replace('__PAGE',elem.description);
     newcard = newcard.replace('_link_',elem.images[0]);

     return newcard;
});


const allcardsString = allcards.join('');

const page = mainTemplate.replace('__PRODUCTS__CARDS__',allcardsString);


const app = http.createServer((req,reS) => {
    console.log('Request received');
    console.log(req.url);
    // reS.writeHead(200,{
    //     'content-type':'text/html',
    // })
    // reS.end(page);

    const {pathname,query} = url.parse(req.url,true);
    console.log('\n',query,'\n');
    if(pathname == '/home')
    {
        reS.end(page);
    }
    else if(pathname == '/product')
    {
        const id = query.id;
        const p_data = products[id];
        reS.end =( `
        <div>
            <h2>${p_data.title}</h2>
            <h4>${p_data.price}</h4>
            

        </div>
    `);
}
else{
    reS.end('404....NOT Found');
}
});


app.listen(3500,() => {
    console.log('----server started--------')
});
   //code between 1000to9999

//http://localhost4000/