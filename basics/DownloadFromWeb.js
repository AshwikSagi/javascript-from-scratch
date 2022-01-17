// npm install axios
// node DownloadFromWeb.js --url="" --dest="download.html"

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
