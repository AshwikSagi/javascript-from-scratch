//node createBigFile.js --dest=big.data
let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);
//console.log(args.dest);
let arr=[];
for(let i=0;i<=50000000;i++){
    arr.push(i);
}
let str=arr.join("\n");
fs.writeFileSync(args.dest,str,"utf-8");
fs.appendFileSync(args.dest,str,"utf8");
fs.appendFileSync(args.dest,str,"utf8");
fs.appendFileSync(args.dest,str,"utf8");