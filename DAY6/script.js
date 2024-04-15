// console.log('start');
// setTimeout(()=>(console.log('timeout...')),5000);
// console.log('intermediate');
// console.log('end');


// setTimeout(()=>(console.log('timeout1...')),20000);
// console.log('start');
// setTimeout(()=>(console.log('timeout2...')),10000);
// console.log('intermediate');
// console.log('end');



// function createorder(x){
//     console.log("soap");
// }
// function makepayment(){
//     console.log(makepayment);
// }

// const pr2=new Promise((resolve,reject)=>{
    
//     if(true){
//        setTimeout(()=>{
//         resolve("done");
//        },10000);
//     }
//     else{
//         reject();
//     }
// })
// console.log(pr2);


// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("done-123");
//     },10000);
// });
// pr.then((res)=>{
//     console.log(res);;
// });


// const pr3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("some error occured");
//     },5000);
// });
// console.log(pr3);
// pr3.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("error");
// })

// const pr4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("some error occured");
//     },1000);
// });
// setTimeout(()=>{
//     console.log("first timeout...");
// });

// pr4.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
   
//     console.log(err);
// });

setTimeout(function abc(){
    console.log('t am done');
},0);

const pr=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('done')},0);
    
})