let a=new String("hello");
let b="hello";
if(a===b){
    console.log("yes");
}
else{
    console.log("no");
}

// const str=JSON.stringify(obj);
// console.log(str);

//cannot reassign const objects
// const obj={
//     "firstname":"sakshi",
//     "lastname":"gupta"
// }
// obj.firstname=20;
// console.log(obj);


//  obj={
//     "firstname":"sakshi",
//     "lastname":"gupta"
// }
// obj.firstname=20;
// console.log(obj);

//using array
// let arr={};
// console.log(arr);

// let arr=[1,2,34];
// arr=[2,3,4];
// console.log(arr);


// const arr2=[2,3,4];
// arr2[2]=45;
// console.log(arr2);

// const obj={
//     "name":"sakshi",
//     "lastname":"gupta"
// }
// const arr=[1,2,34];

// function checkifobject(x ){
//     if(Array.isArray(x))
//     {
//         console.log("not object");
//     }
//     else if(typeof(x)=="object"){
//         console.log("object");
//     }
// }
// checkifobject([1,2,3,4]);
// checkifobject({"name":"sakshi"});


//using loops
const arr=['name',2];
const obj={
    "name":"sakshi",
    "age":20
};
// for(i=0;i<2;i++)
// {
//     console.log(arr[i]);
// }
// for(i=0;i<2;i++)
// {
//     console.log(obj[i]);
// }


//forof
// for(let i of arr)
// {
//     console.log(i);
// }
// for(let i of obj)
// {
//     console.log(i);
// }


//forin
// for(let i in arr)
// {
//     console.log(i)
// }
// for(let i in obj)
// {
//     console.log(i)
// }

//DOM
//window object properties
// console.log(innerHeight);
// console.log(innerWidth);

//OR

// window.console.log(window.innerHeight);
// window.console.log(window.innerWidth);

// console.log(window.document);
// // console.log(window)
// console.dir(window.document);
// // console.dir(window)

// const res=document.getElementById('ht1');
// console.log(res);


// const res=document.querySelectorAll('div>h3');
// console.log(res);
// const res1=document.querySelectorAll('ht1');
// console.log(res1);


// const res=document.getElementsByTagName('h2');
// res[0].innerHTML="<h3>hello,world!</h3>";
// const res1=document.getElementsById('ht2');
// res1[0].innerText="hey";

// console.log(res);
// console.log(res1);

// const ne=document.createElement("h3");
// ne.innerText="DYNAMIC PRACTICE";
// // console.log(ne);
// document.body.appendChild(ne);

const firstDiv = document.getElementsByTagName('div');
const ne = document.createElement('h3');
ne.innerText = "DYNAMIC TEXT";
console.log(firstDiv);
firstDiv[0].appendChild(ne);
firstDiv[0].removeChild(ne);