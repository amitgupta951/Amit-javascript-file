
function hello(){
    console.log("A")
    console.log("m")
    console.log("i")
    console.log("t")
}

// hello()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNumber(5,8)

function addTwoNumber(num1,num2){
// let result = num1+num2
// return result;
return num1+num2
}
const result = addTwoNumber(5,8)
// console.log("Result: ", result)

function loginUserMessage(username){

if(username=== undefined){
    console.log("Please enter a username");
    return 
}
return `${username} just logged in`
}
// console.log(loginUserMessage("Amit"))

// console.log(loginUserMessage("Amit"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,2000,50000))

const user = {
    username: "Amit",
    pass: 12355
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and password is ${anyobject.pass}`)
}
// handleObject(user)
 handleObject({
    username: "JaiMataDi",
    pass: 123456789
 })


 const myArray = [100,2003,2000,1111,212,112]

 function returnSecondValue(getArray){
    return getArray[5]
 }
//  console.log(returnSecondValue(myArray))

 console.log(returnSecondValue([20,14,2,5,52,50,8,]))