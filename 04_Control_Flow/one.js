// if 
// const isUserLoggedIn = true;
// const temperature = 41
// if(temperature===40){
//     console.log("less than 50")
// }
// else{
//     console.log("temperature is greater than 50")
// }

// console.log("Executed")
// <, >, <=, >=, ==, !=, ===

// const score = 100;
// if(score >99){
//     const power ="century"
//     console.log("User score:"+power)
// }
// console.log("User score:"+power)


// const balance =1000;
// // if(balance>500) console.log("good");

// if(balance<500){
//     console.log("less than");
// }
// else if(balance<750){
//     console.log("less than 750");
// }

// else if (balance<950) {
//     console.log("less than 950");
// }
// else{
//     console.log("less than 1200");
// }

const isUserLoggedIn = true;
const debitCard = true;
loggedInFromGoogle = true;
const loggedInFromEmail = true;
if(isUserLoggedIn && debitCard ){
    console.log("Allows to buy cousre");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Successfully logged in")
}