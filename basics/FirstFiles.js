let minimist=require("minimist");
let args=minimist(process.argv);
let fs=require("fs");
let sourcetext=fs.readFileSync(args.source,"utf8");
let words=sourcetext.split(" ");
for(let i=0;i<words.length;i++){
    words[i]=words[i].toUpperCase();
}
let desttext=words.join(" ");
fs.writeFileSync(args.destext,desttext,"utf8");