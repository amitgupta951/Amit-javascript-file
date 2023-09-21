const mysym = Symbol("key1")
const jsuser={
    name: "Amit",
    age: 22,
    [mysym]: "mykey1",
    location: "Kandivali",
    email: "amitgupta@sentient.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(jsuser.email)

// console.log(jsuser["name"])
// console.log(jsuser["email"])
// console.log(jsuser["location"])
// 
console.log(jsuser[mysym])
jsuser.email="chatgpt.com"
console.log(jsuser.email)  // Mostly use this
// Object.freeze(jsuser)
jsuser.email = "hedeuh@gmail.com"
console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello Js user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());


