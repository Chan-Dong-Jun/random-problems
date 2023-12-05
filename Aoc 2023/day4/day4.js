
const fs = require('fs');
const data = fs.readFileSync("./day4.txt", {encoding:"utf-8", flag:"r"});
let datastream=data.split(/\r\n/);
let res = 0
for (row of datastream) {
    
    allNums = row.split(":").pop()
    allNums = allNums.split("|")

    let winningNums = allNums[0].match(/\d+/g)
    let entryNums = allNums[1].match(/\d+/g)

    const nPower = entryNums.filter(value => winningNums.includes(value)).length;
    res += nPower && 2**(nPower-1)
}
//console.log(res)


res = new Array(datastream.length).fill(1)

for ([rowIndex,row] of datastream.entries()) {
    
    allNums = row.split(":").pop()
    allNums = allNums.split("|")

    let winningNums = allNums[0].match(/\d+/g)
    let entryNums = allNums[1].match(/\d+/g)

    let numOfCopies = res[rowIndex]
    let numOfMatch = entryNums.filter(value => winningNums.includes(value)).length;

    for (let i=0; i<numOfMatch; i++) {
        res[i+rowIndex+1] += numOfCopies
    }
}
console.log(res[res.length-1])
res = res.reduce((total, value) => total + value, 0 )
console.log(res)