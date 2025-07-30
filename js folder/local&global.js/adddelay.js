const delaysum=(x,y)=>
    new Promise((resolve,reject)
=>{
    setTimeout{()=>{
        const sum=x+y;
        resolve(sum);
    },500}
});
delaysum(3,7)
.then(result=>{
    console.log("sum is",result);
    return delaysum(result,5);
})
.then(result2=>
{
    console.log("sum plus 5 is",result2);
})
.catch(error=>
{
    console.error("Error Occured",eror)
}
);