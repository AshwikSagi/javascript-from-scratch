// node timers.js --n=10 --d=500
let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);
let count=args.n;
let time=args.d;
let id=setInterval(function(){
    console.log(count+" time-units to go.");
    count--;
    if(count==0){
        clearInterval(id);
        console.log("Timeout");
    }
},time);