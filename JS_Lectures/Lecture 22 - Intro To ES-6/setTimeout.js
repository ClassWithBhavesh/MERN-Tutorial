// setTimeout - that will execute all the operations in asynchronous way
// it will take an callback as the first argument and then it will take a duration (when the function should be invoked!)

// setTimeout(() => {

// }, duration)

let btn = document.querySelector(".dis_box");
let box = document.querySelector(".cont");

box.style.backgroundColor = "black";
box.style.color = "white";
box.style.width = "50px";
box.style.height = "50px";
box.style.display = "none";

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     box.style.display = "block";
//   }, 5000);
// });

// let displayStatus = true;
// let displayCount = 0;

// btn.addEventListener("click", () => {
//   let displayInterval = setInterval(() => {
//     if (displayStatus) {
//       console.log(displayCount);
//       box.style.display = "block";
//       displayStatus = !displayStatus;
//       displayCount++;
//     } else {
//       console.log(displayCount);
//       box.style.display = "none";
//       displayStatus = !displayStatus;
//       displayCount++;
//     }
//   }, 1000);
// });

//     if (displayCount == 10) {
//       clearInterval(displayInterval);
//     }


