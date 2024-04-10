// const res=document.querySelector('div');
// console.log(res);
// div.innerHTML="<P>HELLO</P";
// div[0].innerHTML="<P>HELLO</P";


//remove first child
// const res=document.querySelector('div');
// // const c=document.querySelector('p');
// // res.removeChild(c);

// //remove secondchild
// const d=document.querySelector('p:nth-of-type(2)');
// res.removeChild(d);

// function getInfo (e)
// {
//     const d=document.querySelector('div');
//     // const el=document.createElement('p');
//     // el.innerText="MY NAME IS SAKSHI";
//     d.prepend("my name is sakshi");
// }

function getInfo (e)
{
    // const d=document.querySelector('div');
    // // const el=document.createElement('p');
    // // el.innerText="MY NAME IS SAKSHI";
    // d.prepend("my name is sakshi");
    console.log(e);
    // e.target.setAttribute('style','color:red');
    // e.target.setAttribute('style','background-color:green');
    e.target.style.color='red';
    e.target.style.backgroundcolor='green';
    }
