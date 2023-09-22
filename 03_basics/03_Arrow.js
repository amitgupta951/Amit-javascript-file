const user = {
    username: "Amit",
    price: 8795457,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to Rto consultancy how may i help you`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Amit-Gupta"
// user.welcomeMessage()

// console.log(this)

// function hello(){
//     let username = "heyAmit"
//     console.log(this.username);
// }
// hello();


// const hello = function(){
//     let username = "amit"
//     console.log(this.username)
// }

// hello()


// const hello = ()=>{
//     let username = "amit"
//     console.log(this);
// }
// hello()


//           Arrow Function

// const addTwo= (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(4,5))


// const addTwo= (num1,num2) =>  (num1+num2)
// const addTwo= (num1,num2) =>  (num1+num2)

const addTwo = (num1, num2)=> ({username: "Amit"})
console.log(addTwo(4,5))