console.log('hello');

//const arr=[10,22,34];

//using foreach
// const ans=arr.forEach((a)=>{
// console.log(a);
// return a*2;
// });

// console.log(ans);

//using map
// const ans1=arr.map((a)=>{
//     console.log(a);
//     return a*2;
//     });
    
//     console.log(ans1);

//filter on strings
    // const arr=[
    //     'delhi','mumbai','chennai','kolkata'
    //     ,'pune','iraq','russia','USA'
    // ]

    // const ans=arr.filter((s)=>{
    // if(s.includes('i')){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    // })
    // console.log(ans);

    //using touppercase
    // const arr=[
    //     'delhi,india','mumbai,india',
    //     'chennai,indIa','shanghaI,china'
    //     ,'washIngton,USA','Texas,USA'
    // ]
    // const ans=arr.filter((a)=>{
    //     const ns=a.toLowerCase();
    //     if(ns.includes('india')){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // })
    // console.log(ans);
//way1:if(a.tolowerCase.includes('india))
//way2:const ans=arr.filter((a)=>a.tolowerCase.includes('india))


//using touppercase
const arr=[
    'delhi,india','mumbai,india',
    'chennai,INDIA','shanghaI,china'
    ,'washIngton,USA','Texas,USA'
]
const ans=arr.filter((a)=>{
    const ns=a.toUpperCase();
    if(ns.includes('INDIA')){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans);