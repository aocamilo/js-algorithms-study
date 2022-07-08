/*
  * Scope defines the life time of a variable and where can it be used
  * Global Scope: Global variables created using var and accesible by all the scripts
    loaded in the page, there is a high risk of overwriting
  * Function Scope: Variables declared inside a function, these are only accesible
    from inside the function (includes args). Declared using var
  * Block Scope: Variables defined inside a block, and only accesible inside the block
    are declared using let or const.
*/

// Global scope
var hello = "Hello";

// Function scope
function printNumbers() {
  var i;
  for (i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i); // 10 10 10 10 10 10 10 10 10 10
    }, 100);
  }
}

printNumbers();

function printNumbersTwo() {
  var i;
  for (i = 0; i < 10; i++) {
    function eventuallyPrintNumber(n) {
      setTimeout(function () {
        console.log(n); // 0 1 2 3 4 5 6 7 8 9
      }, 100);
    }
    eventuallyPrintNumber(i);
  }
}

printNumbersTwo(); // Creates a new scope inside the function eventuallyPrintNumber

// Block scope
function printNumbersThree() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i); // 0 1 2 3 4 5 6 7 8 9
    }, 100);
  }
}

printNumbersThree(); //With let the scope of the variable is available inside the block
// and for every for loop we create a new scope that remembers the value of i
// so you can access it from the nested function

//Ways to break the JS scope
var a; //Declared globally
function example() {
  a = "hello"; // References a in outer scope
}

// a has not been declared in an ancestor scope
function example() {
  a = "hello"; // a is now a property of the global object
}

//if strict mode is added it would throw a ReferenceError since a it's not defined

// Breaking the JS Scope
// Adding the variables to the function object itself allows to access variables of function scope
// from outside the function
function foo() {
  foo.myVar = 42;
}

console.log(foo.myVar); //"undefined"
foo();
console.log(foo.myVar); //"42"

// i is declared with let so it gets a block scope that only allows us to call the variable inside the loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(`${i} from outside the block scope`);

//Closures are very interesting as you can access outer function's scope from the inner function
const piggyBank = () => {
  let myPiggyBank = 0;

  return (cant) => {
    myPiggyBank += cant;
    console.log(`My piggy bank now has ${myPiggyBank}`);
  };
};

const myPiggyBank = piggyBank();
myPiggyBank(15);
myPiggyBank(1);

function cantTouchMe() {
  if (true) {
    let cantTouchThis = "cant touch this variable"; // Block scoped variable, cant be touched outside the block scope
    console.log(`${cantTouchThis}`);
  }
  console.log(`${cantTouchThis} from outside the block scope`); // cantTouchThis is not defined
}

cantTouchMe();
