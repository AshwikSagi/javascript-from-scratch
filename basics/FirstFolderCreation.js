// // node FirstFolderCreation.js --source=teams.json --dest=WorldCup
// //npm init
// //npm install pdf-lib
// let minimist=require("minimist");
// let fs=require("fs");
// let args=minimist(process.argv);
// let pdf=require("pdf-lib");
// // console.log(args.source);
// // console.log(args.dest);
// let teamsJSON=fs.readFileSync(args.source,"utf-8");
// let teams=JSON.parse(teamsJSON);
// fs.mkdir(args.dest);
// // console.log(teams.length);
// let path=require("path");
// for(let i=0;i<teams.length;i++){
//     let folderName=path.join(args.dest,teams[i].name);
//     fs.mkdirSync(teamFolder);
//     for(let j=0;j<teams[i].matches.length;j++){
//         let fileName=path.join(teamFolder,teams[i].matches[j].opponent+".pdf");
//         createScorecard(teams[i].name,teams[i].matches[j],matchFileName);
//     }
// }
// function createScorecard(teamName,match,matchFileName){
//     let t1=teamName;
//     let t2=match.opponent;
//     let result=t1+" "+match.result;
//     let originalBytes=fs.readFileSync("Template.pdf");
//     let promiseToLoadPdf=pdf.PDFDocument(originalBytes);
//     promiseToLoadPdf.then(function(pdfdoc){
//         let page=pdfdoc.getPage(0);
//         page.drawText(t1,{
//             x:320,
//             y:704,
//             size:10
//         });
//         page.drawText(t2,{
//             x:320,
//             y:690,
//             size:10
//         });
//         page.drawText(t1,{
//             x:320,
//             y:670,
//             size:10
//         });
//         let promiseToSave=pdfdoc.save();
//         promiseToSave.then(function(changedBytes){
//             fs.writeFileSync(matchFileName,changedBytes);
//         });
//     });
    

// }

// npm install pdf-lib
// node 14_FirstWritingPDF.js --source=teams.json --dest=worldcup

let minimist = require("minimist");
let fs = require("fs");
let path = require("path");
let pdf = require("pdf-lib");

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

fs.mkdirSync(args.dest);
for (let i = 0; i < teams.length; i++) {
    let teamFN = path.join(args.dest, teams[i].name);
    fs.mkdirSync(teamFN);

    for (let j = 0; j < teams[i].matches.length; j++) {
        let matchFileName = path.join(teamFN, teams[i].matches[j].opponent + ".pdf");
        createScoreCard(teams[i].name, teams[i].matches[j], matchFileName);
    }
}

function createScoreCard(teamName, match, matchFileName) {
    let t1 = teamName;
    let t2 = match.opponent;
    let result = t1 + " " + match.result;

    let bytesOfPDFTemplate = fs.readFileSync("Template.pdf");
    let pdfdocKaPromise = pdf.PDFDocument.load(bytesOfPDFTemplate);
    pdfdocKaPromise.then(function(pdfdoc){
        let page = pdfdoc.getPage(0);

        page.drawText(t1, {
            x: 320,
            y: 706,
            size: 10
        });
        page.drawText(t2, {
            x: 320,
            y: 716,
            size: 10
        });
        page.drawText(result, {
            x: 320,
            y: 726,
            size: 10
        });

        let finalPDFBytesKaPromise = pdfdoc.save();
        finalPDFBytesKaPromise.then(function(finalPDFBytes){
            fs.writeFileSync(matchFileName, finalPDFBytes);
        })
    })
}