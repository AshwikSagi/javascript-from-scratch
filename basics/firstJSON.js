// node firstJSON.js --dest=teams.json
let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);
let s1={
    name:"ashwik",
    age:23
};
let s2={
    name:"kalyan",
    age:24
};


console.log(s1.name);
console.log(s2.age);
let students=[s1,s2];
let json=JSON.stringify(students);
fs.writeFileSync(args.dest,json,"utf-8");