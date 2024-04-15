function sum(a,b){
    console.log(a+b);
}
function div(a,b)
{
    console.log(a/b)
}
//sum(6,2);
console.log('module 1.....');
const name='Ajay';
module.exports={
    // fn1:sum,
    // fn2:div,
        //or
    // sum:sum,
    // div:div,
       //or
       sum,
       div,
       'name':name,
};