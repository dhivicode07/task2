function getNumber(num)
{
    //promises is a base object for async work
    return new Promise
    (resolve=>setTimeout(()=>resolve(num),500
));

}
getNumber(2) // Return a promises that resolve with 2 after 500ms
.then(n=>getNumber(n*3))// Resolve affter another 500
.then(n2=>console.log("Result",n2))// Results 6
.catch(err=>console.error(err));
//handle error any possible rejecton
// o/p appear after 1 sec

function getNumber(num)
{
return new Promise(function(resolve)
});

getNumber(2)
.then(function(n)
{return getNumber(n*3);

})
.then(function(n2){
    console.log("Result",n2);
})
.catch(function(err){
    console.log("result",n2);
});