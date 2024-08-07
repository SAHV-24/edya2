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
    // filters the elements from an array that are valid to the condition:
    // returns an ARRAY

theArray = [{name:"Sergio",age:19},
            {name:"Juan",age:19},
            {name:"Andrés",age:20},]

console.log()
console.log(theArray.filter(person=>person.age===20)) // returns => [ { name: 'Andrés', age: 20 } ]

// Array.prototype.find()
    // returns the first element that meets the condition

theArray = [{name:"Sergio",age:19},
    {name:"Juan",age:19},
    {name:"Andrés",age:20},]

const ans = theArray.find(p=>p.age==19)

console.log()
console.log(ans) // returns => { name: 'Sergio', age: 19 } 

// Array.prototype.findIndex()

theArray = [93,8,-2,48,0]

console.log()
console.log(theArray.findIndex(x=> x===0)) // returns => 4

// In case that the value is repeated, it'll find the first index that it finds 
theArray = [93,8,-2,48,0,9,0]

console.log(theArray.findIndex(x=> x===0)) // Still returns => s4

// Array.prototype.findLast()
    // Searches from the bottom of the array the corresponding value
    // RETURNS THE VALUE! 

theArray = [{name:"Sergio",age:18},
            {name:"Juan",age:19},
            {name:"Johan",age:18},
            {name:"Orlando",age:18}]

console.log("")
console.log(theArray.findLast(person=>person.age===18))// ==> returns {name:"Orlando",age:18}


// Array.prototype.findLastIndex()
    // Searches from the bottom of the array the corresponding value
    // RETURNS THE Zero based index of the Array.

theArray = [{name:"Sergio",age:18},
            {name:"Juan",age:19},
            {name:"Johan",age:18},
            {name:"Orlando",age:18}]

console.log("")
console.log(theArray.findLastIndex(person=>person.age==18)) // ==> returns 3


// Array.prototype.flat()
    // Used for flatting the arrays, it flats the length of the parameter.
theArray = [1,2,[[3,4],5]]
console.log(theArray.flat(2)) // returns [1,2,3,4,5]

theArray = [1,2,3,[[4,[5,[6]]],7]]
console.log(theArray.flat(Infinity)) // returns [1,2,3,4,5,6,7]

// Array.prototype.flatMap()
    // Used for flatting an array and then doing something, for example
    // if i want to multiply by two the odd numbers and eliminate the even numbers i can do 
    // a flat map for it:

    // for example:

theArray = [1,2,3,4,5,6,7,8,9,10]

// i could do this:
/*
    theArray
        .filter(x=> x % 2 !== 0)
        .map(x=> x*2)
*/


// or:
console.log()
console.log(theArray.
                    flatMap(x=> x % 2 === 0 ? [] : [x*2] ))

// => returns [ 2, 6, 10, 14, 18 ], so what it does is to flat an empty array if
// it is an even number! and if it is an odd number, it'll flat the x*2 little array

// Array.prototype.forEach()
    // It executes the function that is inside the callback function 
    // FOR EACH ELEMENT inside it!

    // Note: It doesn't make a copy of the array before iterating :( 
theArray = [9,2,1,32,78,90]

console.log()
theArray.forEach(num=> console.log(num)) // returns 9 2 1 32 78 90

theArray = ["one","two","three","four"]
theArray.forEach(num=>{
    console.log(num)
    if(num ==="two"){
        theArray.shift(num)   // => returns one \n two \n four
                              // won't return three cause it'll work with the current array for each iteration!
    }
})


// Array.prototype.includes()
    // returns true or false if it includes the given parameter

theArray = ['dog','cat','turtle']

console.log()
console.log(theArray.includes('cat')) // ==> returns true
console.log(theArray.includes('bull')) // ==> returns false

// it also has something called fromIndex whether you can determine the search of the method:
// if index > indexOfTheSearchedParameter returns false

theArray = ['dog','cat','turtle']
console.log(theArray.includes('cat',-1)) // returns false
console.log(theArray.includes('cat',1)) // returns true

// Array.prototype.indexOf()
    // returns the first index where you can find the first element!
    // it also has the fromIndex showed before.

theArray = ['candy hall','dairy hall','lentils hall','candy hall']

console.log()
console.log(theArray.indexOf('candy hall') + 1) // it'll return 1 that is the first hall on the supermarket that was found


// Array.prototype.join()
    // it join's the elements inside an array!
    
theArray = ['I','Love','You']

console.log(theArray.join(' ')) // it'll return 'I Love You', so romantic huh?

// Array.prototype.keys()
    // Returns an array iterator where you can access to it's indexes

theArray = [3,6,2,1,90,-2,4,0]

const keys = theArray.keys()

for(let index of keys){
    console.log(index) // prints 0 1 2 3 4 5 6 7
}

// Array.prototype.lastIndexOf()
    // returns the last index of an instance that was found

theArray = ['Madison Square','LA', 'Universal Hotel', 'Madison Square', 'Central Park']

let answer = theArray.lastIndexOf('Madison Square')

console.log("\n His last presentation at MS was on the "+ Number(answer+1) +"th day of Month.") // returns that his last presentation was on the fourth day

// Array.prototype.map()
    // applies a callback function on each element and returns an array!

theArray = [4,5,6,7,8,9,0,1]

answer = theArray.map( number => number ** number )

console.log("\n"+answer) // returns [256,3125,46656,823543,16777216,387420489,1,1]

// Array.prototype.pop()
    // returns the last element of the array and deletes it on the array

theArray = ['vegetables','fruits','water','alcohol']

answer = theArray.pop()

console.log("\nYou need to remove from your diet the "+ answer +" because it damages your current diet: " + theArray)
// returns "You need to remove from your diet the alcohol because it damages your current diet: vegetables,fruits,water"


// Array.prototype.push()
    // returns the index+1! where the element will be added
    // and adds the element to the Array.

theArray = ['onion','sauce','water','chicken','tomato','lentils']

// what does it misses for making lentils???

answer = theArray.push('SALT!!!')

console.log("\nDon't forget to add the " + theArray[answer-1])
// returns "Don't forget to add the SALT!!!"


// Array.prototype.reduce()
    // reduces an array to a determined value from left to right, it takes as parameters:
    // accumulator, element, index, array

theArray = [[1,2],[3,4],[5,6],[7,8]]

let initialValue = []

answer = theArray.reduce((accumulator, element)=> {
                                accumulator.push(element)
                                return accumulator}, initialValue )
        // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]

console.log()
console.log(answer) // returns 36

// Array.prototype.reduceRight()
    // reduces an array to a determined value from RIGHT to LEFT, it takes as parameters:
    // accumulator, element, index, array

theArray = [[1,2],[3,4],[5,6],[7,8]]

initialValue = []

answer = theArray.reduceRight((accumulator, element) => [... accumulator, element], initialValue ) 

console.log()
console.log(answer) 
// returns [ [ 7, 8 ], [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ]

// Array.prototype.reverse()
    // Inverses the array direction
theArray = ['E','V','O','L']

answer = theArray.reverse()

console.log()
console.log("All you need is: " + theArray)// returns "All you need is: L,O,V,E"

// Array.prototype.shift()
    // eliminates the first element of the array and returns it back.

theArray = ['z','a','b','c','d','...']

answer = theArray.shift()

console.log()
console.log('The alphabet is: '+ theArray + "," + answer) // returns "The alphabet is: a,b,c,d,...,z"

// Array.prototype.slice()
    // Helps you to slice the Array, it returns A COPY of the array that you want
    // and doesn't affect the original array, it makes a DEEP copy of the Array
    // it has the parameters (start,end) (IT DOESN'T CONTAIN THE END INDEX) [START,end)

theArray = ['bread',"ham", "cheese","ham","bread"]

answer = theArray.slice(1,theArray.length-1)

console.log()
console.log("Sandwich is nice but it wouldn't be nicer if it was because of the " + answer)
// returns "Sandwich is nice but it wouldn't be nicer if it was because of the ham,cheese,ham"

// Array.prototype.some()
    // returns a boolean if the Array has at least SOME element that
    // accomplish the condition!

theArray = [3,7,9,13,99,999999,2]

answer = theArray.some( number => number % 2 === 0)

console.log()
console.log(answer) // returns true

// Array.prototype.sort()
    // sorts an array with a callback funciton that receives two arguments
    // a , b; if a - b == 0 the sort of the elements will be the same
    // if a - b == 1 or if you return a-b the sorting will be ascendent 
    // if a - b == -1 or if you return b-a the sorting will be descendent

theArray = [9,23,1,-4,2,90,123,2,-40,0,48]

console.log()
console.log(theArray.sort((a,b)=>a-b)) // returns [-40, -4,  0,  1,  2, 2,  9, 23, 48, 90, 123]
console.log(theArray.sort((a,b)=>b-a)) // returns [123, 90, 48, 23,  9, 2,  2,  1,  0, -4,-40]

// Array.prototype.splice()
    // Deletes and can replace the elements on an array
    // it'll return the deleted elements inside an Array.
    // The parameters are: .splice(start,deletedElements,(item1,item2,...item_n))

theArray = ['vegetables',"hamburger","fruits"]

// it'll replace hamburguer with water, and add later eggs
console.log(theArray.splice(1,1,"water","eggs")) // returns ['hamburger']
console.log(theArray) // returns [ 'vegetables', 'water', 'eggs', 'fruits' ]


// Array.prototype[@@iterator]()
    // allows to get (returns) an .values() function (that is basically an iterator)
    // which can be used in a for ... of loop

theArray =[1,2,3,4,5]

iterator = theArray[Symbol.iterator]()

console.log()
console.log(iterator.next()); // returns { value: 1, done: false }
console.log(iterator.next()); // returns { value: 2, done: false }
console.log(iterator.next()); // returns { value: 3, done: false }
console.log(iterator.next()); // returns { value: 4, done: false }
console.log(iterator.next()); // returns { value: 5, done: false }
console.log(iterator.next()); // returns { value: undefined, done: true }

// Array.prototype.toLocaleString()
    // it returns the strings, objects or dates formatted to a 
    // locale zone currency, hour, etc.., for example if you have some currencies array
    
theArray=[5000,23300,15000,100]

console.log(theArray.toLocaleString("es-AR", { style: "currency", currency: "ARS" })) 
// returns $ 5.000,00,$ 23.300,00,$ 15.000,00,$ 100,00

// Array.prototype.toReversed()
    // reverses the elements inside an array
theArray = [1,2,3,4,5,6,7,8,9,10]

console.log(theArray.toReversed()) // returns [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Array.prototype.toSorted()
    // It sorts an array and then creates a deep copy of the array 

theArray=[{ name: 'apple', price: 50 }, { name: 'banana', price: 20 }, { name: 'cherry', price: 30 }];

answer = theArray.toSorted((a,b)=> a.price - b.price)

console.log()
console.log(answer)// [{ name: 'banana', price: 20 }, { name: 'cherry', price: 30 }, { name: 'apple', price: 50 }]

answer.push({name:"mandarine",price:3.00})
console.log()
console.log(theArray) // returns // [{ name: 'apple', price: 50 }, { name: 'banana', price: 20 }, { name: 'cherry', price: 30 }]
                      // because it didn't modify the original array

// Array.prototype.toSpliced()
    // It splices an array an then returns a DEEP COPY of that array

theArray  = ["Jan", "Mar", "Apr", "May"];

answer = theArray.toSpliced(0,2,"November","December")

console.log()
console.log(answer) // returns [ 'November', 'December', 'Apr', 'May' ]


// Array.prototype.toString()
    // returns an String separated by commas of the array independent of the arrays inside it:

theArray = [[1,[2,[3]]],[5,6,7],[8,9,0]]

answer = theArray.toString()

console.log()
console.log(answer) // returns "1,2,3,5,6,7,8,9,0"

// Array.prototype.unshift()
    // Adds the elements at the beggining of the array and RETURNS THE New length of the array

theArray = [9,23,31,213]

answer = theArray.unshift(7,8)

console.log()
console.log(answer) // returns 6

// Array.prototype.values()
    // Returns an iterator of the values inside an array

theArray = ['a','b','c']

const values = theArray.values()

console.log()
for(let value of values){
    console.log(value) 
}/* returns 
        a
        b
        c
*/


// Array.prototype.with()
    // returns a deep copy of an array WITH an element change in a certain index
    // array.with(index,newValue)

theArray = ['june','july','september']

answer = theArray.with(2,'august')

console.log()
console.log(answer) // returns [ 'june', 'july', 'august']

// the end!