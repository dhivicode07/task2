let globalVar="I am global";//global variable
function showGlobal()
{
    let name="divi";//local variable
console.log(globalVar);
console.log("Hellow"+name);//printing local var inside the function
}
showGlobal();
console.log(globalVar);
console.log("hello"+name);
 
//console.log("Hello"+name); //uanable to access to local varible7v
{
    const inside=42; // block lvel variable 
    console.log(inside);

}
console.log(typeof inside); // undefined bacause of block varible
{
    var insidevar=42;
}
console.log(typeof insidevar);

