// For Each Loop

const coding = ["Html", "CSS", "Java", "Drupal", "SQL"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


// coding.forEach((item, index, arr)=>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        launguageName: "Javascript",
        ExtensionName: "js"
    },

    {
        launguageName: "java",
        ExtensionName: "java"
    },

    {
        launguageName: "python",
        ExtensionName: "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.launguageName);
})