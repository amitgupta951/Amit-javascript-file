// for of 
["", "", ""]
[{}, {}, {}]

const arr = [1,2,3,4,5,6]
for(const num of arr){
    // console.log(num);
}

const greeting = "Hello World!"
for(const greet of greeting){
    // console.log("Each Char is:" +greet);
}


// Maps // uniqe value pairs

const map = new Map()
map.set('ind', "India")
map.set('USA', "United states of America")
map.set('uk', "united kingdom")
map.set('ind', "India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ":-" ,value)
}
const myObject = {
    'name1': "Amit",
    'name2': "Ajay"
}
// for (const [key,value] of myObject) {
//     console.log(key, ":-" ,value)
// }