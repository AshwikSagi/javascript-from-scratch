// npm install excel4node
// node FirstExcelFile.js --source=teams.json --dest=teams.xls

let minimist=require("minimist");
let fs=require("fs");
const { execFile } = require("child_process");
let args=minimist(process.argv);
let excel=require("excel4node");
// console.log(args.source);

let teamsJSON=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamsJSON);
let wb=new excel.Workbook();
for( let i=0;i<teams.length;i++){
    let sheet=wb.addWorksheet(teams[i].name);
    sheet.cell(1,1).string("rank");
    sheet.cell(1,2).number(teams[i].rank);
    sheet.cell(2,1).string("opponent");
    sheet.cell(2,2).string("result");
    for(let j=0;j<teams[i].matches.length;j++){
        sheet.cell(j+3,1).string(teams[i].matches[j].opponent);
        sheet.cell(j+3,2).string(teams[i].matches[j].result);
    }
}
wb.write(args.dest);