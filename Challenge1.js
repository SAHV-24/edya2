// 1. Function Declaration
function declaredFunction() {
    console.log("I am a declared function.");
    console.log("What is `this` here?", this);
}

// 2. Function Expression
var expressedFunction = function() {
    console.log("I am an expressed function.");
    console.log("What is `this` here?", this);
}

// 3. Arrow Function
var arrowFunction = () => {
    console.log("I am an arrow function.");
    console.log("What is `this` here?", this);
}

// Calling the functions
declaredFunction();
expressedFunction();
arrowFunction();

// HOISTING:
    // hoisting is the ability of accessing a function without declaring it,

console.log("--------------------------------------------------------------------------------")

console.log(typeof hoistedDeclaredFunction);  // "function"
console.log(typeof hoistedExpressedFunction);  // "undefined"
console.log(typeof hoistedArrowFunction);  // "undefined"


function hoistedDeclaredFunction() {
    console.log("I was declared before being called!");
}

var hoistedExpressedFunction = function() {
    console.log("I was expressed before being called!");
}

var hoistedArrowFunction = () => {
    console.log("I am an arrow function defined before being called!");
}


console.log("--------------------------------------------------------------------------------")