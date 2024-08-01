// This is a program for knowing the usual array methods based on the
// MDN Array Method's Documentation. You can visit it at: 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array 

// Array.prototype.at()
    // Returns the value of the index that you send
let theArray = [89, 123, undefined, 4]

console.log(theArray.at(2)) // returns undefined
console.log(theArray.at(1)) // returns 123

// Array.prototype.concat()
    //Concat's array's into one!
let arrayOne = [1,2,3,4,5]
let arrayTwo = [6,7,8,9,10]
let arrayThree= [6,7,8,9,10]

console.log("\n"+arrayOne.concat(arrayTwo,arrayThree))

// Array.prototype.copyWithin()
    // Creates a copy of any of the elements within it.
    // it accepts (target, start, end) where all of them are zero-based indexes

theArray = [0,1,2,3,4,5]

console.log("\n"+theArray.copyWithin(2,3,5)) // returns : [ 0, 1, 3, 4, 4, 5 ]

// Array.prototype.entries()
    // Returns an iterator where you can access to the INDEXES!
theArray = ['a','b','c','d']

let iterator = theArray.entries()

for(let el of iterator){
    console.log(el)
                // returns 
                // [ 0, 'a']
                // [ 1, 'b']
                // [ 2, 'c']
                // [ 3, 'd']
}

// Array.prototype.every()
    // returns a boolean to that checks that each element
    // meets a condition on a function:

const areOdd = (number) => number%2!=0

theArray = [1,3,5,7,9,11]

console.log("\n"+theArray.every(areOdd)) // returns True!

theArray = [1,3,5,7,9,11,2] // add a number two
console.log("\n"+theArray.every(areOdd)) // returns False!

// Array.prototype.fill()
    // Fills an array with a determined value, its parameters are
    // (value, start, end)

theArray = [0,0,0,0,0,0,0]
theArray.fill(9,0,-1)

console.log("\n"+theArray) // returns [9,9,9,9,9,9,9,9]

// Array.prototype.filter()
// Array.prototype.find()
// Array.prototype.findIndex()
// Array.prototype.findLast()
// Array.prototype.findLastIndex()
// Array.prototype.flat()
// Array.prototype.flatMap()
// Array.prototype.forEach()
// Array.prototype.includes()
// Array.prototype.indexOf()
// Array.prototype.join()
// Array.prototype.keys()
// Array.prototype.lastIndexOf()
// Array.prototype.map()
// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.reduce()
// Array.prototype.reduceRight()
// Array.prototype.reverse()
// Array.prototype.shift()
// Array.prototype.slice()
// Array.prototype.some()
// Array.prototype.sort()
// Array.prototype.splice()
// Array.prototype[@@iterator]()
// Array.prototype.toLocaleString()
// Array.prototype.toReversed()
// Array.prototype.toSorted()
// Array.prototype.toSpliced()
// Array.prototype.toString()
// Array.prototype.unshift()
// Array.prototype.values()
// Array.prototype.with()