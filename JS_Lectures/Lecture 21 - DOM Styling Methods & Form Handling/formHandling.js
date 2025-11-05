// Form Handling - onChange & onInput


let fullName = document.getElementById("fName");

// fullName.addEventListener("input", (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.data);
//     console.log(e.target.value);
// })


fullName.addEventListener("change", (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    let username = e.target.value;
    console.log(username);
})

