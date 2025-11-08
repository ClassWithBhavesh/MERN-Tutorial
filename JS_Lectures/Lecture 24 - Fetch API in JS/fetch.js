// Fetch API -
// - it will return two promises
// - asynchronous behaviour
// - two promises are there then we've to use two .then()

// fetch - get, put, patch, post, delete
// get - to get the data
// post - to create a new data
// put  - to update the existing data
// patch- to update the existing partial data
// delete- to delete the data

let API_URL = "https://jsonplaceholder.typicode.com/users";

// console.log(fetch());

// console.log(fetch(API_URL));

// to get the data from an API integration fetch will by default uses "get" method

// fetch(API_URL).then((resp) => {
//     return resp.json();
// }).then((data) => {
//     console.log(data);
//     data.forEach((userData, ind) => {
//         console.log(`${ind} - ${userData.name}`);
//     })
// }).catch((error) => {
//     console.log(error);
// })

// now, we'll explore that how we can create a new data using "post" method

let newUser = {
  name: "D'Code Gurukul",
  username: "dcodegurukul",
  email: "hello@dcodegurukul.com",
  address: {
    street: "Bengali Square",
    suite: "19-20",
    city: "Indore",
    zipcode: "92998",
    geo: {
      lat: "-45.3159",
      lng: "26.1496",
    },
  },
  phone: "54785698231 y56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((response) => {
    return response.json();
  })
  .then((userData) => {
    console.log(userData);
  }).catch((error) => {
    console.log(error);
  })

fetch(API_URL)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((userData, ind) => {
      console.log(`${ind} - ${userData.name}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
