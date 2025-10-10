// Loops in JavaScript - a process which is repeating itself to a certain condition. 
// type of loops in JavaScript - 
// 1. while
// 2. do-while
// 3. for 
// 4. for-in
// 5. for-of
// 6. forEach

// to iterate a loop there are 3 eligibilities to iterate or peform a loop
// 1. declaring a variable
// 2. applying conditions of that variable
// 3. incrementation or decrementation of that variable



// --> while loop - 
// let num = 1;

// while(num < 11){
//     console.log(num);
//     num++;
// }




// --> do-while loop - 
// let number = 1;

// do{
//     console.log(number);
//     number++;
// }while(number < 11)




// --> for loops - 
// for(let num = 1; num < 11; num++){
//     console.log(num);
//     }


// for(let userAge = 50; userAge <= 60; userAge++){
//     console.log(userAge);
// }



// for(let num = 10; num >= 1; num--){
//     console.log(num);
// }











// Nested For Loops : it is widely used to work on matrixes, 2-D or more dim arrays or the tabular data

for(let row = 1; row <= 100; row += 10){
    for(let col = row; col < row + 10; col++){
        document.write(col + "&nbsp;&nbsp;&nbsp;");
    }
    document.write("<br>");
}

