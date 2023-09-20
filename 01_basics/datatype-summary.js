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


// ***************************** //
let mynameisAmit = "Amit.Gupta"
 let anothername =mynameisAmit;
 anothername = "chaiwithbiscuit"
 console.log(mynameisAmit)
 console.log(anothername)

 let userone={
    email_id: "amit.gupta@gmail.com",
    upi_id:" amitgupta@paytm"
 }
 
 let usertwo= userone
 usertwo.email_id = "amitgupta@sentient.in"
 console.log(userone.email_id)
 console.log(usertwo.email_id)