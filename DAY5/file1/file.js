//callback

// let arr=[2,3,4,5]
// function printpretty(elem){
//     console.log(':',elem)
// }
// function printArray(arr){
//     for( let i=0;i<arr.length;i++){
//         printpretty(arr[i]);
//     }
// arr.foreach(function printpretty(elem){
//     console.log(':',elem)
// })

// printpretty(arr)


// arr.foreach((a) =>{
//     console.log(':',a)
// });
// }
// printpretty(arr)

// arr.foreach((a,b,c)=>{
//     console.log(':',a,b,c)
// });
// }
//     printpretty(arr)


//settimeout()
function printpretty(elem){
    console.log(':',elem)
}
setTimeout(printpretty,10000)