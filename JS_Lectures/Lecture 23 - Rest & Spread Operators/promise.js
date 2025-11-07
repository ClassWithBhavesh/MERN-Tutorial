// Promise - Asynchronous hota hai!

let promStatus = false;

// dclaration of Promises is JS -
let prom = new Promise((result, reject) => {
    if(promStatus){
        result("Promise Resolved!");
    }else{
        reject("yaha par aap jo bhi likhoge wo kya karega? wo error show kara dega and issi ko hum kehte hai kya????  customized error!!!!!");
    }
});

// console.log(prom);


// agar promise fullfill hota hai to kya karna hoga?         ----->        .then()  
// agar promise fullfill nahi hota hai to kya karna hoga?    ----->        .catch()  


// prom.then((resolvedMsg) => {
//     console.log(resolvedMsg);
// })

// prom.catch((rejectedMsg) => {
//     console.log(rejectedMsg);
// })



prom.then((resolution) => {
    console.log(resolution);
}).catch((error) => {
    console.log(error);
})




