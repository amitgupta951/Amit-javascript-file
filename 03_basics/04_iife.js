//     Immediately Invoked Function Expression(IIfe)

(function hello(){
    console.log(`database connected`)
})();

( (name) =>{
    console.log(`DB connected 2 ${name}`);
} )("amit")