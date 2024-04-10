
// console.log('GEC start')
// function printpretty(){
//     console.log("prettysatrt")
//     let ans=2+3
//     console.log(ans)
//     console.log('prettyend')
// }
// setTimeout(printpretty,10000)
// console.log('gec end')


//using onclick
// function printpretty(){
//     console.log("prettysatrt")
//     let ans=2+3
//     console.log(ans)
//     console.log('prettyend')
// }
// const btn=document.getElementById('btn')
// btn.addEventListener("click",printpretty)


// console.log('start')
// const req=fetch("https://api.github.com/users/deepak3448")
// console.log(req)
// req.then(()=>console.log('fetched'))

// console.log('end')


// console.log('start')
// const req=fetch('https://dummyjson.com/products/1')
// // .then(res => console.log(res))
// const res=req.then(res=>res.json())
// res.then((data) => console.log(data))
// // .then(json => console.log(res))
// console.log('end')

console.log('start')
const data=fetch('https://dummyjson.com/products/1')
.then((res)=>res.json())
.then((data)=>console.log(data))
console.log('end')



            