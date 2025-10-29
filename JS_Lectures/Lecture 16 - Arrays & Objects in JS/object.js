// Object in JavaScript
// - is a collection of the data in format of key & value pair
// - denoted by "{}"
// - every element will be separated by ","
// - object doen't have any index value



let objData = {
    carCompany: "ford",
    carName: "Endeavour",
    carPrice: 42,
    carColor: "Black"
}

// console.log(objData);
// console.log(objData.carColor);
// console.log(objData.carName);

// console.log(objData[Object.keys(objData)[1]]);
// console.log(Object.values(objData)[1]);

for(let key = 0; key < Object.keys(objData).length; key++){
    console.log(objData[Object.keys(objData)[key]])
}

for(let key in objData){
    console.log(key  + " : " + objData[key])
}

