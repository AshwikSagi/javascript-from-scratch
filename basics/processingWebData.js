// npm install jsdom
// node processingWebData.js --source=download.html

let minimist=require("minimist");
let fs=require("fs");
let Jsdom=require("jsdom");
const { clear } = require("console");
const { div } = require("prelude-ls");
let args=minimist(process.argv);
 // console.log(args.source);
fs.readFile(args.source,"utf8",function(err,html){
    let dom=new Jsdom.JSDOM(html);
    let document=dom.window.document;

    // console.log(document.title);

    let descriptions=document.querySelectorAll("div.match-info>div.description");
    for(let i=0;i<descriptions.length;i++){
        console.log(descriptions[i].textContent);
    }
});
