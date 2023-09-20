const name = "Amit "
const repoCount =  50;
// console.log(name + repoCount +" hello")

console.log(`hello my name is ${name} and repo count is ${repoCount}`)

const fullname = new String('amit-Gupta-com')
console.log(fullname[0])
console.log(fullname.length)
console.log(fullname.toUpperCase())
console.log(fullname.charAt(4))
console.log(fullname.indexOf('G'))

const newString = fullname.substring(0,5)
console.log(newString)

const anotherString =fullname.slice(-8,5)
console.log(anotherString)

const newStringone ="    Amit-Gupta    "
console.log(newStringone)
console.log(newStringone.trim())
console.log(fullname.split('-'))


