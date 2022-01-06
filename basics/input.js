let args=process.argv;
console.log(args);
let i=args[2];
console.log(i);

let cmdlineargs=process.argv;
console.log("At 0 "+ cmdlineargs[0]);
console.log("At 1 "+ cmdlineargs[1]);
console.log("At 2 "+ cmdlineargs[2]);
console.log("At 3 "+ cmdlineargs[3]);
console.log("At 4 "+ cmdlineargs[4]);

let cmdlineargs=process.argv;
let i=cmdlineargs[2];
console.log(i);
console.log(typeof i);
i=i+30
console.log(i);

let j=parseInt("200",10);//default base=10
console.log(j);
j=j+30;
console.log(j);

let cmdlineargs=process.argv;
let j=parseInt(cmdlineargs[2],10);//default base=10
console.log(j);
console.log(typeof j);
j=j+30;
console.log(j);


