// div(); // here the function will execute even after JS is a interpreted language due to the hoisting phenomenon


// Functions in JavaScript 
// - the bunch or the collection of code that will perform some operations or task at a specific time!
// - these are the reusable component of JavaScript
// - exectution of the function will took place in two steps
    // 1. Declaring a function
    // 2. Calling a function

// ---> Classification of functions according to Bhavesh Sir!
// - Standard function
// - parametric function
// - function with return value

// Hoisting - hoisting is phenomenon in JS through which every variable and functions are automatically access the global scope
// that is, at the time of declaring a variable or a function they will automatically declared at the top of the scope

// function funcName(para1, para2, ........){
//     execution or the task
// }


// Standard Function -
// function div(){
//     let firstNum = 5;
//     let secNum = 10;
//     let result = secNum / firstNum;
//     console.log(result);
// }

// div();
// div();
// div();




// parametric function - 

// function div(num1, num2, num3, num4 = 0){ // at the time of function declaration we will pass parameters
//     // console.log(num1);
//     // console.log(num2);
//     let result = num1 /( num2 + num3 + num4);
//     console.log(result);
// }

// div(55,96, 25); // at the time of function calling we will pass arguments
// div(505,10, 25, 35);
// div(54,9, 25, 35);
// div(47,47, 25, 35);


// let num = 1;

// do{
//     console.log(num);
//     num++;
// }while(num < 11)






// Function with Return value - 

// function sum(num1, num2){
//     let finSum = num1 + num2;
//     return finSum;
// }


// console.log(sum(10,50));







// write a JS program to calculate the percentage of a student as well as allot them a suitable grade according to their percentage


// let student_name = prompt("Enter student name : ");
// let maths = Number(prompt("Enter maths marks : "));
// let eng = Number(prompt("Enter eng marks : "));
// let hn = Number(prompt("Enter hn marks : "));
// let sst = Number(prompt("Enter sst marks : "));
// let sc = Number(prompt("Enter sc marks : "));

// function ob_marks(maths, eng, hn, sst, sc){
//     let ob_Marks = maths + eng + hn + sst + sc;
//     return ob_Marks;
// }

// function stdPer(obtained_marks){
//     let total_marks = 500;
//     let per = (obtained_marks / total_marks) * 100;
//     return per;
// }

// function st_result(st_name, percentage, obt_marks){
//     if(percentage <= 100){
//         console.log(st_name + " has scored " + obt_marks + " & has got " + percentage + "% and secured A grade!");
//     }
//     else if(percentage <= 90){
//         console.log(st_name + " has scored " + obt_marks + " & has got " + percentage + "% and secured B grade!");
//     }
//     else if(percentage <= 80){
//         console.log(st_name + " has scored " + obt_marks + " & has got " + percentage + "% and secured C grade!");
//     }
//     else if(percentage <= 70){
//         console.log(st_name + " has scored " + obt_marks + " & has got " + percentage + "% and secured D grade!");
//     }
//     else if(percentage <= 60){
//         console.log(st_name + " has scored " + obt_marks + " & has got " + percentage + "% and secured E grade!");
//     }
//     else if(percentage <= 33){
//         console.log(st_name + " has scored " + obt_marks + " & has got " + percentage + "% and secured F grade!");
//     }
//     else{
//         console.log("You have not appeared in any of the exam! you have a year back, enjoy the year!");
//     }
// }

// let obtain_marks = ob_marks(maths,eng,hn,sst,sc);

// let student_percentage = stdPer(obtain_marks);


// st_result(student_name, student_percentage, obtain_marks)
// st_result("Anuradha Sharma", student_percentage, obtain_marks)
