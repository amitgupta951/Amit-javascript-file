//  var c = 300
let a =500;
 if(true){
    let a =54;
    const b = 45;
    // console.log("INNER:", a);

 }
//  console.log(a)
//  console.log(b)
//  console.log(c)

function one(){
    const username ="Amit"
    function Two(){
        const website ="Youtube"
        // console.log(username);
    }
    // console.log(website)

    Two()
}
one()

if(true){
    const username ="Amit"
    if(username==="Amit"){
        const website=" Youtube"
        // console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)


addone(5)
function addone(num){
    return num+1
}


addTwo(4)
const addTwo =  function(num){
    return num + 2
}
