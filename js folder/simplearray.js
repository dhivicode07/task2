const colors=["red","green","yellow","blue"];
const numbers=[10,20,30];
numbers.push(40);
console.log(numbers);
for ( let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}
//print in a single line of the text use join 
console.log(colors.join(","));