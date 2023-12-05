const fs = require('fs');

const data = fs.readFileSync("./day3.txt", {encoding:"utf-8", flag:"r"});
let datastream=data.split(/\r\n/);

let numFinder = string => {
    let numList = string.match(/\d+/g);
    numList = numList.map((num) => new Array(num, string.indexOf(num), string.indexOf(num)+num.length-1));
    return numList;
}

let numValidator = (num,rowIndex) => {
    if (rowIndex!=0 && /[^.0-9]/.test(datastream[rowIndex-1].slice(num[1]-1,num[2]+2))) {
        console.log(datastream[rowIndex-1].slice(num[1]-1,num[2]+2))
    }
    //console.log(datastream[rowIndex-1].slice(num[1]-1,num[2]+2))
    if (rowIndex!=0 && /[^.0-9]/.test(datastream[rowIndex-1].slice(num[1]-1,num[2]+2))) {
        return true
    }
    if (rowIndex!=datastream.length-1 && /[^.0-9]/.test(datastream[rowIndex+1].slice(num[1]-1,num[2]+2))) {
        return true
    }
    if (num[1] != 0 && /[^.0-9]/.test(datastream[rowIndex][num[1]-1])) {
        return true
    }
    if (num[1] != datastream[0].length-1 && /[^.0-9]/.test(datastream[rowIndex][num[2]+1])) {
        return true
    }
    return false
}

let list = []
let res= 0
for (let [rowIndex,row] of datastream.entries()) {
    rowNums = numFinder(row)
    for (let num of rowNums) {
        console.log(num)
        if (numValidator(num, rowIndex)) {
            list.push(num[0])
            res += Number(num[0])
        }

    }
}
// console.log(datastream.length)
// console.log(res)
// console.log(list)

//console.log(datastream)