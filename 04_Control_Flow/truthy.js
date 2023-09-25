const userEmail = []
if(userEmail){
    console.log("Got it user email id")
}
else{
    console.log("User don't have email id")
}

// falsy value

// false , 0 , -0, BigInt on, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length ===0){
    console.log("Array is empty");
}

const emptyobj  = {}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}


// Nullish Coalescong Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15 
val1 = null ?? 10 ?? 20

console.log(val1);



// Ternary operator

// condition ? true : false

const TeaPrice = 100
TeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")