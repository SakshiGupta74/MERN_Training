// const firstnamechange = (e) => {
//     console.log(e.target.value);
// }
// const firstnamechange=(e)=>{
//     const val=e.target.value;
//     if(val.length>3){
//         console.log("correct");
//     }
// }
// function submitform(e) {
//     e.preventDefault();
//     // console.log(e.target[0].value);
//     const t = e.target;
//     const res = {
//         hobbies: [],
//     }
//     for (let i = 0; i < t.length; i++) {
//         // console.dir(t[i].value);
//         const ty = t[i].type;
//         const v1 = t[i].value;
//         const nm = t[i].name;
//         //console.log(ty,v1,nm);
//         if (ty == 'submit') {
//             res[nm] = v1;
//         }
//         if (type = 'checkbox' && t[i].checked) {
//             res.hobbies.push(v1);
//         }
//         if (ty != 'checkbox') {
//          res[nm]=v1;
//         }
//     }
//     console.log(res);
// }

function sum(a,b,fun){
    const ans= a+b;
    fun(ans);
}
function print(x){
    console.log(x);
}
sum(3,4,print);

