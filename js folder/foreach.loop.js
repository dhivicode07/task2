//we canot use break or return a array
//array.foreach(value,index{})
let fruit=["apple","jackfruit","chiku"];
fruit.forEach(function(fruits,index){
    console.log(index+":"+fruits);
});

let numbers=[1,2,3]
    numbers.forEach(num=>{
    console.log(num*2);
});

let n=[1,2,3];
let doubled=n.map((num)=>num*2);
console.log(doubled);



//converting map() to foreach()
let num=[1,2,3];
let doub=[];//empty array

num.forEach((n1)=>{
    doubled.push(n*2)//n will be multipled and pushed into doubled
});
console.log(doub);
//object
// name,age,isStudent are key ram,47,true are values
let person={
    name: "divi",
    age:21,
    isStudent:true
};
console.log(person.name);
person.city="New Work";
console.log(person.city);
delete person.isStudent;//delete
console.log(person.isStudent);
//printing the obj
for(let key in person)
{
    console.log(key+":"+person[key]);
}
//obj using function
let user={
    name:"alice",// using this i want to fetch the name
    greet:function()
    {
        console.log("Hai I am alice");// boiler code
    }
};
user.greet();
// obj using this
let user1={
    name:"hari",// using this i want to fetch the name
    greet1:function()
    {
        console.log(this.name);// boiler code
    }
};
user.greet1();
// array of objects
let flower=[ 
    {name:"rose",type:"flower",color:"pink"}
    {name:"fern",type:"non-lowering",color:"green"}

];
//loop thru all flowers
flowers.forEach(flower=>{
    console.log(`${flower.name} is a ${flower.type} plant is usually ${flower.color`)}
});



