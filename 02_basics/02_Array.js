const marvel_heros_name = ["IronMan","SpiderMan","Thor"]
const dc_heros_name = ["SuperMan","BatMan","CaptainAmit"]

marvel_heros_name.push(dc_heros_name)
// console.log(marvel_heros_name)
// console.log(marvel_heros_name[3][1])

// const allHeros= marvel_heros_name.concat(dc_heros_name)
// console.log(allHeros);


// const all_new_heros = [...marvel_heros_name, ...dc_heros_name]
// console.log(all_new_heros)

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("amit"))
console.log(Array.from("amit"))
console.log(Array.from({name: "amit"})) 

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))