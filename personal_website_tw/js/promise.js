function fetchData() {
  return new Promise((resolve, reject) => {
    // kam jo time le rha ho
    setTimeout(() => {
      console.log("ok done in 2000ms ");
      reject();
    }, 2000);
  });
}

console.log("promise example");
console.log("hi");
console.log("what your name");
console.log("my name is khan");

fetchData()
  .then(() => {})
  .catch(() => {});

// const promise = fetchData();
// promise.then(() => {
//   console.log("promise resolved");
// });

// promise.catch(() => {
//   console.log("error in resolving promise");
// });
//fetch data from network
// const promise = fetch("https://jsonplaceholder.typicode.com/todos");

// promise
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
// promise.catch((error) => {
//   console.log(error);
// });

console.log("got the data");
console.log("using promise");
