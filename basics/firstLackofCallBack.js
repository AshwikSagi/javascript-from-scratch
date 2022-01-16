// task 1 = Read File
// task 2 = Calculate Primes
// task2 is done after task1 which is bad
// node firstLackofCallBack.js --source=big.data --n=70000

let minimist=require("minimist");
let fs=require("fs");
const { arrayBuffer } = require("stream/consumers");
let args=minimist(process.argv);
console.log(args.source);

// Task 1 area
let t1=Date.now();
console.log("Task 1 started at" +t1%100000);
let data=fs.readFileSync(args.source);
let t2=Date.now();
console.log("Task 1 finished at" +t2%100000);
console.log(t2-t1);
// Task 1 finished

// Task 2 area
function IsPrime(x){
    let isPrime=true;
    for(let div=2;div<x;div++){
        if(x%div==0){
            isPrime=false;
            break;
        }
    }
    return isPrime;
}

let t3=Date.now();
console.log("Task 2 started at" +t3%100000);
let arr=[];
for(let i=2;i<args.n;i++){
    let isPrime=IsPrime(i);
    if(isPrime){
        arr.push(i);
    }
}
let t4=Date.now();
console.log("Task 2 finished at" +t4%100000);
console.log(t4-t3);
console.log(t4-t1);

