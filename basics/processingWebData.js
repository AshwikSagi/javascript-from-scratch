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
    let dom=new Jsdom.JSDOM(html);//will load and prepare the dom for the programmer just like the browser would do
    let document=dom.window.document;

    // console.log(document.title);

    let descriptions=document.querySelectorAll("div.match-info>div.description");
    let result=document.querySelectorAll("div.match-info>div.status-text");
    // we will get all div's with class description and status-text whose parent is a div with class match-info
    for(let i=0;i<descriptions.length;i++){
        console.log(descriptions[i].textContent);
        console.log(result[i].textContent);

    }
});
