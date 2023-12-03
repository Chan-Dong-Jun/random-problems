
//part1
const fs = require('fs');

const data = fs.readFileSync("./day2.txt", {encoding:"utf-8", flag:"r"});
let numBlue, numGreen, numRed;
function entryChecker(entries) {
    for (entry of entries) {
        numBlue = /\d+\sblue/.exec(entry);
        if (numBlue && /\d+/.exec(numBlue) > 14) {
            return true;
        }
        numRed = /\d+\sred/.exec(entry);
        if (numRed && /\d+/.exec(numRed) > 12) {
            return true;
        }
        numGreen = /\d+\sgreen/.exec(entry);
        if (numGreen && /\d+/.exec(numGreen) > 13) {
            return true;
        }
    }
}

let res = 0;
let datastream=data.split(/\r\n/); //why does this only accept regex
datastream = datastream.map(line => new Array(line)); //map vs foreach
datastream = datastream.map(line => line[0].split(": "));
datastream = datastream.map(line => new Array(line[0],line[1].split(";")));
for (let i=0; i<datastream.length; i++) {
    if (!entryChecker(datastream[i][1])) {
        res += Number(/\d+/.exec(datastream[i][0]));
    }
}
console.log(res);

//part2 

function entryCheckerNew(entries) {
    let listBlue = [];
    let listRed = [];
    let listGreen = [];
    for (entry of entries) {
        numBlue = /\d+\sblue/.exec(entry);
        numBlue = Number(/\d+/.exec(numBlue))|| 0;
        numRed = /\d+\sred/.exec(entry);
        numRed = Number(/\d+/.exec(numRed)) || 0
        numGreen = /\d+\sgreen/.exec(entry);
        numGreen = Number(/\d+/.exec(numGreen)) || 0
        listBlue.push(numBlue)
        listRed.push(numRed)
        listGreen.push(numGreen)
    }
    return (Math.max(...listBlue)||1)*(Math.max(...listRed)||1)*(Math.max(...listGreen)||1)
}
list =[
    '2 blue, 1 red, 4 green',
    ' 7 blue, 6 green',
    ' 7 red, 12 green, 3 blue',
    ' 7 red, 8 green, 4 blue',
    ' 14 green, 9 blue',
    ' 15 green, 3 red, 3 blue'
  ]
res = 0;
for (let i=0; i<datastream.length; i++) {
    res += entryCheckerNew(datastream[i][1])
}
entryCheckerNew(datastream)
console.log(res)
//console.log(entryCheckerNew(datastream))