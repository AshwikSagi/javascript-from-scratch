//node FirstWritingJSON.js --dest=teams.json
let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);

let teams=[
    {
        name:"India",
        rank:1,
        matches:[
            {
                opponent:"England",
                result:"won"
            },
            {
                opponent:"Australia",
                result:"won"
            }
        ]
    },
    {
        name:"Australia",
        rank:2,
        matches:[
            {
                opponent:"England",
                result:"won"
            },
            {
                opponent:"India",
                result:"loss"
            }
        ]
    },
    {
        name:"England",
        rank:3,
        matches:[
            {
                opponent:"India",
                result:"lose"
            },
            {
                opponent:"Australia",
                result:"lose"
            }
        ]
    }
];
let json=JSON.stringify(teams);
fs.writeFileSync(args.dest,json,"utf-8");