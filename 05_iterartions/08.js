const myNums = [1,2,3,4]
//0+1+2+3+4
// const myTotal = myNums.reduce(function(acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`)
//     return acc + curval
// }, 0)


// Both r same but above code are readability

const myTotal = myNums.reduce((acc, curr) =>acc+curr,0)
console.log(myTotal)


const shoappingCart = [
    {
        itemName: " js course",
        price: 2999
    },

    {
        itemName: " java course",
        price: 4999
    },

    {
        itemName: " Data Science course",
        price: 7999
    },
]

 const priceTopay = shoappingCart.reduce((acc,item) => acc + item.price, 0)

 console.log(priceTopay)