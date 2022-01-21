//node FirstReadingJSON.js --source=teams.json
let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);
fs.readFile(args.source,"utf-8",function(err,json){
    if(err){
        console.log("error occured reading json");
    }
    else{
        // console.log(json);
        let teams=JSON.parse(json);
        console.log(teams[1].matches[1].opponent);
        console.log(teams[2].matches[1].result);
    }

});
