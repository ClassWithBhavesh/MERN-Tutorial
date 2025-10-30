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

// 5. unshift - used to add or insert any element from the starting of an array
// let arr = [10,20,30,60,10,80,55];
// console.log(arr);
// arr.unshift(55,86);
// console.log(arr);

// 6. concat - used to merge of join two or more different arrays
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

// 7. Join - used to join each and every element of an array
// let arr1 = [10,20,30,60,10,80,55];
// console.log(arr1);
// let joinedArr = arr1.join(",");
// console.log(arr1);
// console.log(joinedArr);

// 8. Slice - used to cut a pirece of any Array by using indices and return a new array
// let arr1 = [10,20,30,60,10,80,55];
// console.log(arr1);
// let slicedArray = arr1.slice(1, 5);     // .slice(Start, end)   end = end-1
// console.log(slicedArray);

// 9. splice - used to insert, remove, update the existing array
// let arr1 = [10,20,30,60,10,80,55];
// console.log(arr1);
// arr2 = arr1.splice(3, 3, 86,"54",32); // .splice(indexValue, howManyDeletions, valuesToInsert)
// console.log(arr1);
// console.log(arr2);

// 10. isArray - used to find whether the given input is an array or not! (Array.isArray())
// let arr1 = (10,20,30,60,10,80,55);
// console.log(arr1);

// if(Array.isArray(arr1)){
//     console.log("This is an array!")
// }else{
//     console.log("Not an Array!")
// }


// 11. indexOf - used to find the index of any element of an array
// let arr1 = [10,20,30,60,10,80, 30,55, 30];
// let ex_index = arr1.indexOf(30);
// console.log(ex_index);


// 12. lastIndexOf - used to find the last index of any element of an array
// let arr2 = [10,20,30,60,10,80, 30,55, 30];
// let last_index = arr2.lastIndexOf(30);
// console.log(last_index);


// 13. includes() - used to find whehter the element or value exist in that array or not
// let arr2 = [10,20,30,60,10,80, 30,55, 30];
// let result = arr2.includes(55.0001);
// console.log(arr2);
// console.log(result);


