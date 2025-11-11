// We Are fetching an API here

const API_URL = "https://jsonplaceholder.typicode.com/post";

// Traditional method for fetching an API -

// fetch(API_URL).then((response) => {
//     return response.json();
// }).then((postData) => {
//     console.log(postData);
// }).catch((err) => {
//     console.log(err);
// })

// Modern Method for fetching an API -

const tBody = document.querySelector("#tBody");

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const postData = await response.json();
    postData.forEach((post) => {
      const tr_ele = document.createElement("tr");
      console.log(tr_ele);
      // console.log(post);
      tr_ele.innerHTML = `<td>${post.userId}</td>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>`;
      tBody.append(tr_ele);
    });
  } catch {
    console.error("Aap yaha jo bhi likhoge wo kya ban jayega? ek error!");
  }
};

fetchData();

