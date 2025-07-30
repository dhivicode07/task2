//setInterval(callbackfunction,delayinmillisecond
//callbackfunction-function to be excuted
//delayInmillionsecond-intervals between excution
setInterval(()=>
{
    const now=new Date();
    console.log(now.toLocaleTimestring());
},1000);