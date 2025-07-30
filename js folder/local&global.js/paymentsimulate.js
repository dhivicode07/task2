function fakepaymentAPI(amount)
{
    return new Promise((resolve) =>
    {
        setTimeout(()=>
        {
            resolve(`payment of ${amount} successs`);
        },2000);

});
    }
    async function makepayment()
    {
        console.log("processing payment");
        const message=await fakepaymentAPI(500);
        console.log(message); 
    }
    makepayment();