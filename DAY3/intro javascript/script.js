//using var

// function env(){
// console.log(message);
// var message="hello world";
// console.log(message);
// message="else";
// console.log(message);
// }
// env();


// function env(){
//     var message="hello world";
//     console.log(message);
//     message="else";
//     console.log(message);
// }
// console.log(message);
// env();

// function env(){
//    for(var i=0;i<5;i++){
//     console.log('--',i);
//    }
//    console.log(i);
// }
// env();

//using let

// let message="hello";
// console.log(message);


// {
// let message="hello";
// }
// console.log(message);


// let message="hello";
// console.log(message);

//using const
// const message="hello";
// console.log(message);

//datatypes
// let age="abcd";
// age="else";
// console.log(typeof(age));

//using array
// let arr=['a','b','c','d'];
// arr[0]='abcd';
// console.log(arr);

// let str="12";
// let age=20;
// let ans=age+str;
// console.log(ans);


// let str="12";
// let age=20;
// let ans=age-str;
// console.log(ans);


// let str="12";
// let p=parseint(str);
// let a=Number(str);
// console.log(p,n);

// let a='12';
// let b=12;
// if(a==b){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

// let s=['a','b','c','d'];
// let cpy=s;
// console.log(s,cpy);
// if(s==cpy){
//     console.log('1.yes');
// }
// else{
//     console.log('2.no');
// }
// if(s===cpy){
//     console.log('1.yes');
// }
// else{
//     console.log('2.no');
// }


// const str='khan';
//  const username=`my name is:${str}`;
// const username='my name is:';
// const ans=`${username} ${str}`;
//  console.log(username);
// console.log(ans);

//function:=
// function print(str='nothing is here'){
//     console.log(str);
// }
// print("hello");


// function sum(a,b){
//     if(a && b){
//     console.log(a+b);
// }
// else if(a){
//     console.log(a);
// }
// else{
//     console.log(0);
// }
// }
// sum();

// print();
// a();
//b();
//function declaration
// function print(){
//     console.log('--');
// }
// function print(){
//     console.log('==');
// }

// //function assignment(named)
// const a=function print(){
//     console.log('--');
// }
// //function assignment(anonymous function assignment)
// const b=function print(){
//     console.log('--');
// }
// //arrow  function assignment
// const implicit = (c) => console.log('----');
// print();
// a();
// b();
// c();


//using switch
// let a=2;
// switch(a)
// {
//     case 1:{
//         console.log("one");
//     }
//     case 2:{
//         console.log("two");
//     }
//     case 3:{
//         console.log("three");
//     }

// default:{
//     console.log("not 1, 2, 3");
// }
// }

// const obj=new Object();
// obj[1]='one';
// obj[2]='two';
// obj[12]='twelve';
// console.log(obj);

// const obj=new Object();
// obj[1]='one';
// obj['name']='sakshi';
// obj[12]='twelve';
// console.log(obj);


// const obj={
//     1:'one',
//     'name':'sakshi',
//     12:'twelve'
// };
// console.log(obj);

const obj =  {
     1:'one',
    'firstname':'sakshi',
    'lastname':'gupta',
    'age':22,
    'address':'delhi'

};
const fullname = obj.firstname+obj.lastname;
const fullname2 =   `${obj.firstname} ${obj.lastname}`;
console.log(fullname);
console.log(fullname2);


// const obj =  {
//     1:'one',
//    'firstname':'sakshi',
//    'lastname':'gupta',
//    'age':22,
//    'address':'delhi'
// };
// const x=prompt('please tell the property you know');
// console.log(obj(x));

