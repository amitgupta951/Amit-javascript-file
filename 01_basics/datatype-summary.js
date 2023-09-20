const score=100;
const scoreValue =100.5;
const isLoggedIn = false;
const outsideTemp = null;
let useremail;
const id = Symbol(123);
const anotherId =Symbol('123');
console.log(id ===anotherId);

const bigNumber = 123456678796345454n;


// Refrence  (Non primitive)

// Array, Objects, Functions

const heros = ["Amit", "Ajay", "Ganesh"]
let myObj={
    name: "Amit",
    age:  22
}
const myFunction =  function(){
        console.log("Hello World")
}

console.log(typeof bigNumber)