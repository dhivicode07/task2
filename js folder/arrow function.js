



const sla=() =>
{
    console.log("Welcome to SLA");
}

sla();

function sla()//traditionalfunction
{
    console.log("Welcome to SLA");
}
sla();
//2.Arrow function  with single parameter

const s=x=>x*x;
console.log(s(5));
  
const add=(a,b)=>a+b;
console.log(add(2,3));

//3.arrow function with multiple parameter
const s1=(x1,y1,z1) =>
{
    console.log(x1+y1+z1);
}
s1(10,20,30); 

//4.check the the number is even

const even=(a) => a%4==0?"even":"odd";
{
    console.log(even(4));
}
//5. arrow function with default parameter
const s5=(x5,y5,z6=30)=>
{
    console.log(x5+' '+y5 ' '+z5);
}
s5(10,20);

 