// ---> DOM Targeting Method - 
// 1. document
// 2. document.head
// 3. document.body
// 4. document.title
// 5. document.baseURI
// 6. document.images
// 7. document.links


// 8. document.getElementById
// 9. document.getElementsByClassName
// 10. document.getElementsByTagName



// let tar_Ele = document.getElementById("un_name");
// console.log(tar_Ele)


// let tar_ele = document.getElementsByClassName("firstDiv");
// console.log(tar_ele);

// let tar_Ele = document.getElementsByTagName("div");
// console.log(tar_Ele);





// ---> QuerySelector | QuerySelectorAll

// let ele = document.querySelector("div");
// console.log(ele);

// let ele = document.querySelector("#un_name");
// console.log(ele);

// let ele = document.querySelector(".firstDiv");
// console.log(ele);



// let ele = document.querySelectorAll("div");
// console.log(ele);

// let ele = document.querySelectorAll("#un_name");
// console.log(ele);

// let ele = document.querySelectorAll(".firstDiv");
// console.log(ele);







// Advanced Targeting Methods - 

// let element = document.getElementById("un_name3");
// console.log(element.parentElement);
// console.log(element.children)
// console.log(element.childNodes)
// console.log(element.firstElementChild)
// console.log(element.lastElementChild)
// console.log(element.previousElementSibling.previousElementSibling)
// console.log(element.nextElementSibling)
// console.log(element.nextElementSibling)





// How to get inner Html | text | attribute value | attributes

// let sec_div = document.getElementById("un_name2");
// console.log(sec_div);
// let sec_div_in = sec_div.innerHTML;
// console.log(sec_div_in);
// let sec_div_in = sec_div.innerText;
// console.log(sec_div_in);
// let sec_div_in = sec_div.textContent;
// console.log(sec_div_in);
// let sec_div_attr = sec_div.getAttribute("id");
// console.log(sec_div_attr);
// let sec_div_attr = sec_div.attributes;
// console.log(sec_div_attr);



// How to set innerHTML | textContent | innerText | setAttribute | removeAttribute

// sec_div.innerHTML = "<p>This element has been updated!</p>"
// console.log(sec_div.innerHTML)

// sec_div.innerText = "This element has been updated!"
// console.log(sec_div.innerHTML)

// sec_div.textContent = "This element has been updated!"
// console.log(sec_div.innerHTML)

// sec_div.setAttribute("class", "paraDiv thirdPara");
// sec_div.setAttribute("style", "background-color: black; color: white;");
// sec_div.removeAttribute("class");


// sec_div.textContent = "This element has been updated!"
// console.log(sec_div.innerHTML)









// Styling methods in DOM - 
// style | classList

let ele = document.querySelector("#un_name2");

ele.addEventListener("click", () => {
    ele.style.backgroundColor = "beige";
    ele.style.color = "red";
})

let btn = document.getElementById("btn");
let cont = document.getElementById("container");

let flag = true;

btn.addEventListener("click", () => {
    if(flag){
        cont.style.display = "block";
        flag = !flag;
    }else{
        cont.style.display = "none";
        flag = !flag;
    }
})

