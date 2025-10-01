// Variable is made using three keywords - let | var | const

// what is Variables --> containers that will store or consume some data or value respectively


// var num1 = 52;
// console.log(num1);

// var num_1 = 96;
// console.log(num_1);

// console.log(num1);




// difference b/w let, var & const

// 1. on the basis or re-declaration & re-assignment
// var keyword - 
// var userName = "Anmol";
// console.log(userName);

// var userName = "Amul";
// console.log(userName);

// userName = "Rahul";
// console.log(userName);

// var allows us or variables to re-declare & re-assign any value



// let keyword -

// let userName = "Anmol";
// console.log(userName);

// let userName = "Raghav";
// console.log(userName)

// userName = "Raghav";
// console.log(userName)


// let will not allow us or variable to re-declare the value but we can re-assign the value using let keyword



// const keyword - 

// const userName = "Shanu";
// console.log(userName);

// const userName = "Mandodari";
// console.log(userName);

// userName = "Mandodari";
// console.log(userName);


// const will not allow us or vaiables to change it's value in any condition (re-declaration or re-assignment)



// 2. on the basis of version -

// var --> ES1-5
// let & const --> ES-6



// 3. on the basis of scope - 

// var - block scope (function scope)
// let & const - braces scope


// function numericalPrinting(){
//     for(const i = 1; i < 11; i++){  // i += 1   -->   i = i + 1
//         console.log(i);
//     }

    // console.log(i);
// }

// numericalPrinting()
// console.log(i);