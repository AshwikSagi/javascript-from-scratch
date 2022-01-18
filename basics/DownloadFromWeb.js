// npm install axios
// node DownloadFromWeb.js --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results" --dest="download.html"

let minimist=require("minimist");
let axios=require("axios");
let fs=require("fs");
let args=minimist(process.argv);
// console.log("args.url");
// console.log("args.dest");

let dwnldPromise=axios.get(args.url);
dwnldPromise.then(function(response){
    let html=response.data;
    fs.writeFileSync(args.dest,html,"utf8");
}).catch(function(err){
    console.log("error occured");
});

