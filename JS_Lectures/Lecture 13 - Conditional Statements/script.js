// Conditional Statements -
// 1. if | else | else if
// 2. Switch Case


// 1. if | else | else if

// let bat_status = "low";

// if(bat_status == "low"){
//     console.log("Please, Plug In The Charger.");
// }
// else{
//     console.log("the battery is already full, charge later!");
// }


// let generalPrice = 10.3;

// if(generalPrice == 10){
//     console.log("yes, you can purchase the General!");
// }
// else{
//     console.log("don't purchase");
// }




// write a JavaScript program to print the week day on the basis of week day in number

let num1 = 3;
let num2 = 3.3;
let num3 = 3.3;

// Check whether the three variable are equal or not?
// arrange all three variable in ascending order?
// arrange all three variable in decending order?


// if(num1 == num2 && num2 == num3 && num1 == num3){
//     console.log("all are equal!");
// }
// else if(num1 == num2){
//     console.log("num1 and num2 are equal!");
// }
// else if(num3 == num2){
//     console.log("num3 and num2 are equal!");
// }
// else if(num3 == num1){
//     console.log("num3 and num1 are equal!");
// }
// else{
//     console.log("none of them is equal!");
// }




let userPassPort = true;
let userAdharNo = false;
let userVoterId = true;

if(userPassPort == true){
    if(userAdharNo == true){
        if(userVoterId == true){
            console.log("You're elegible for passport!")
        }
        else{
            console.log("not elegible")
        }
        console.log("andar wala if!")
    }
    console.log("bahar wala if")
}
else{
    console.log("Pass Porat Leke aa!")
}









