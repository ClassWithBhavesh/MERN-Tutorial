// Array Methods

// 1. sort - used to sort an array in ascending order (depends whether the array has numbers or string values)
// let arr = [10,20,30,60,10,80,55];
// console.log(arr);
// newArr = arr.sort();
// console.log(newArr);
// console.log(arr);

// let strArr = ["Anushka", "bhanusha", "Snehshree", "anna"];
// console.log(strArr);
// strArr.sort();
// console.log(strArr);

// 2. reverse() - used to reverse any array
// let arr = [10,20,30,60,10,80,55];
// console.log(arr);
// arr.sort().reverse();
// console.log(arr)
// arr.reverse();
// console.log(arr);

// 3. Push() - used to add or insert any elements at the end of the array
// let arr = [10,20,30,60,10,80,55];
// console.log(arr);
// arr.push(70, "90",120);
// arr.push(90);
// arr.push(120).pop();
// console.log(arr);

// 4. pop() - used to remove or delete an element from the end of the array
// let arr = [10,20,30,60,10,80,55];
// console.log(arr);
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// 5. Shift - used to remove or delete an element from the starting of an array
// let arr = [10,20,30,60,10,80,55];
// console.log(arr);
// arr.shift();
// console.log(arr);

// 6. unshift - used to add or insert any element from the starting of an array
// let arr = [10,20,30,60,10,80,55];
// console.log(arr);
// arr.unshift(55,86);
// console.log(arr);

// 7. concat - used to merge of join two or more different arrays
// let arr1 = [10,20,30,60,10,80,55];
// console.log(arr1);
// let arr2 = arr1.reverse();
// console.log(arr2);

// let newArr = arr1.concat(arr2, arr1, [11,22,33,66]);
// console.log(newArr)
// console.log(arr1);
// console.log(arr2);
// console.log(arr);
// arr.unshift(55,86);
// console.log(arr);

// 8. Join - used to join each and every element of an array
// let arr1 = [10,20,30,60,10,80,55];
// console.log(arr1);
// let joinedArr = arr1.join(",");
// console.log(arr1);
// console.log(joinedArr);

// 9. Slice - used to cut a pirece of any Array by using indices and return a new array
// let arr1 = [10,20,30,60,10,80,55];
// console.log(arr1);
// let slicedArray = arr1.slice(1, 5);     // .slice(Start, end)   end = end-1
// console.log(slicedArray);

// 10. splice - used to insert, remove, update the existing array
// let arr1 = [10,20,30,60,10,80,55];
// console.log(arr1);
// arr2 = arr1.splice(3, 3, 86,"54",32); // .splice(indexValue, howManyDeletions, valuesToInsert)
// console.log(arr1);
// console.log(arr2);

// 11. isArray - used to find whether the given input is an array or not! (Array.isArray())
// let arr1 = (10,20,30,60,10,80,55);
// console.log(arr1);

// if(Array.isArray(arr1)){
//     console.log("This is an array!")
// }else{
//     console.log("Not an Array!")
// }

// 12. indexOf - used to find the index of any element of an array
// let arr1 = [10,20,30,60,10,80, 30,55, 30];
// let ex_index = arr1.indexOf(30);
// console.log(ex_index);

// 13. lastIndexOf - used to find the last index of any element of an array
// let arr2 = [10,20,30,60,10,80, 30,55, 30];
// let last_index = arr2.lastIndexOf(30);
// console.log(last_index);

// 14. includes() - used to find whehter the element or value exist in that array or not
// let arr2 = [10,20,30,60,10,80, 30,55, 30];
// let result = arr2.includes(55.0001);
// console.log(arr2);
// console.log(result);

// let arr1_len = Number(prompt("Enter Array 1 length - "));
// let arr2_len = Number(prompt("Enter Array 2 length - "));
// let arr1 = [];
// let arr2 = [];

// for (let i = 0; i < arr1_len; i++) {
//   let values = Number(prompt("Enter the elements"));
//   arr1[i] = values;
// }

// for (let i = 0; i < arr2_len; i++) {
//   let values = Number(prompt("Enter the elements"));
//   arr2[i] = values;
// }

// let newArr = [];

// let ind = 0;
// for (let j = 0; j < arr1.length; j++) {
//   newArr[ind] = arr1[j];
//   ind++;
// }

// for (let k = 0; k < arr2.length; k++) {
//   newArr[ind] = arr2[k];
//   ind++;
// }

// console.log(arr1);
// console.log(arr2);
// console.log(newArr);

// --> Callback functions - a function when is invoked with in a function or an anonymous function

// 15. some() - 
// let arr2 = [10,2,3,6,10,8,3,5,3];
// console.log(arr2);

// let value = arr2.some((ele) => {
//     return ele >= 18;
// })
// console.log(value);

// let value = arr2.some(callBackFunc);
// console.log(value);

// function callBackFunc(ele){
//     return ele >= 18;
// }

// callBackFunc(20)

// let callBackFunc = (val) => {
//     console.log(val);
// }

// function callBackFunc(val){
//     console.log(val);
// }
// callBackFunc(20)

// 16. every() - used to check every element on the behalf of a certain condition provided by the callback func

// let arr2 = [104,20,30,60,100,80, 30,55, 30];
// console.log(arr2);
// let value = arr2.every((ele) => {
//   return ele >= 18;
// });

// console.log(value);

// 17. find() - used to find the element in an array on certain condition
// let arr2 = [104,20,30,60,100,80, 30,55, 30];
// console.log(arr2);

// let value = arr2.find((ele) => {
//     return ele >= 18;
// })
// console.log(value);

// 18 findIndex() - used to findIndex of the ele appears very first in an array by satisfying the conditions
// let arr2 = [14,2,30,60,100,80, 30,55, 30];
// console.log(arr2);

// let value = arr2.findIndex((ele) => {
//     return ele >= 18;
// })
// console.log(value);

// 19. filter() - used to filter out the selected elements on the basis of a certain condi
// let arr2 = [14,2,30,60,10,80, 30,55, 30];
// console.log(arr2);

// let value = arr2.filter((ele) => {
//     return ele >= 18;
// })
// console.log(value);

// 20. forEach() - used to iterate each and every ele of the array
// let arr2 = [14,2,30,60,10,80, 30,55, 30];
// console.log(arr2);

// arr2.forEach((ele, ind) => {
//     console.log(ele);
//     console.log(ind);
// })

// 21. map() - used to modify an existing array and getting an array again
// let arr2 = [14,2,30,60,10,80, 30,55, 30];
// console.log(arr2);

// let value = arr2.map((value, ind) => {
//     // console.log(value);
//     // console.log(ind);
//     return value*20;
// })

// console.log(value)

// 22. toString() - anmol said "kya hai isme sir, ye to obvious si method hai!"

// 23. reduce() -used to reduce all the elements present in the array by a single value or unit
// let arr2 = [14, 2, 30, 60, 10, 80, 30, 55, 30];
// console.log(arr2);

// let singValue = arr2.reduce((pre, curr) => {
//     return pre ** curr;
// })
// console.log(singValue);

