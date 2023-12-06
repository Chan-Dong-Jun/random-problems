const fs = require('fs');
const data = fs.readFileSync("./day5.txt", {encoding:"utf-8", flag:"r"});



let datastream=data.split(/\r\n\r\n/);

let seeds = datastream.shift().match(/\d+/g)
for (i in seeds) {
    seeds[i] = Number(seeds[i])
}
totalSeeds = []
for (let i=0; i<see)

function hasharrayGenerator(datablock) {
    let mapping = datablock.split(/\r\n/).slice(1)
    mapping = mapping.map(row=> row.match(/\d+/g))
    let hasharray = [] 
    for ([destination, source, range] of mapping) {
        destination = Number(destination)
        source = Number(source)
        range = Number(range)
        end = source + range 
        increment = destination - source
        hasharray.push([source, end, increment])
    }
    
    return hasharray
}
seeds = seeds
//console.log(seeds)
//console.log(seeds)
for (let datablock of datastream) {
    //console.log(datablock)
    datablock = hasharrayGenerator(datablock)
    // console.log(datablock)
    // console.log()
    for (let [index, seed] of seeds.entries()) {
        seed = Number(seed)
        // console.log(datablock)
        //console.log(seed)
        for (let row of datablock) {
            // console.log(seed)
            // console.log(row)
            if (row[0] <= seed && seed< row[1]) {
                //console.log(row)
                //console.log()
                //console.log(seeds[index])
                seeds[index] += row[2]
                //console.log(seeds[index]) 
                //console.log()
            }
        }
    }
}
console.log(Math.min(...seeds))
// let arrayOfHashmap = []
// for (let datablock of datastream) {
    
//     arrayOfHashmap.push(hashmapGenerator(datablock))
// }

// for (let seed of seeds) {
//     seed = Number(seed)
//     for (let hashmap of arrayOfHashmap) {
//         seed = hashmap[seed.toString()] || seed
//     }
//     console.log(seed)
// }

// console.log(seeds)
// //console.log(arrayOfHashmap)


