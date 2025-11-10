// Async & Await - both are the keyword in JavaScript which are used to handle the asynchronous operations in JS

// --> Async - it is a keyword in JavaScript which will return a promise (it will intentionally generates a promise)
// - whenever we will use async keyword to declare a function it will automatically becomes a promise


// function using async keyword

// async function greet(){
//     return "Ram Ram Bhiya!";
// }
// let greeting1 = greet();
// console.log(greeting1);



// // function without using async keyword
// const greet2 = () => {
//     return "Ram Ram Bhaiya!";
// }
// let greeting2 = greet2();
// console.log(greeting2)






// just for udhahran purpose

// let loginStatus = true;

// let prom = new Promise((res, rej) => {
//     if(loginStatus){
//         console.log("already logged in!");
//     }else{
//         console.log("need to log in!");
//     }
// })

// console.log(prom);









function greeting1(){
    console.log("greetings to A");
    console.log("greetings to B");
    console.log("greetings to C");
    console.log("greetings to D");
    console.log("greetings to E");
}

greeting1();

console.log("---------------------------------")

async function greeting2(){
    console.log("greetings to A");
    await "greetings to B";
    console.log("greetings to C");
    console.log("greetings to D");
    console.log("greetings to E");
}

console.log(greeting2());



