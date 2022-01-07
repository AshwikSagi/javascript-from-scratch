let minimist=require('minimist');
let args=minimist(process.argv);
if(args.age<21){
    console.log("Hey "+args.name+",You are not allowed to drink.")
}
else{
    console.log("Hi "+args.name+",Welcome to the club.")
}