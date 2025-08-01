console.log("------------es6------");
// 1. variable declration
let fistName = "Harshit";
const lastName = "Tiwari";
if (true) {
  let x = 90;
  console.log(x);
}

// 2. arrow functions

// function test()
// {
// //body  of function
// }

// test()

// const x=90
// const test = (myparam) => console.log("this is test func", myparam);

// test(77);

// const reverse = () => "test";
// console.log(reverse());

// function john(fun) {
//   fun();
//   return fun;
// }

// john(() => console.log("This is fun"));

// document.getElementById("contact_form")
// .addEventListener("submit",()=>{

// })

// 3. functions... map, filter, forEach...reduce..
const users = ["ankit", "ravi", "rinku"];
// for (let user of users) {
//   console.log(user);
// }

// users.forEach((item) => {
//   console.log(item);
// });

users.forEach((item) => console.log(item));

const numbers = [2, 6, 7, 8, 34, 56];

const newArr = numbers.map((item) => {
  console.log(item);
  return item * item * item;
});
console.log(newArr);
// ["ankit", "ravi", "rinku"];
console.log(users.map((user) => user.charAt(1)));

const newArr1 = numbers.filter((item) => item % 2 == 0);
console.log(newArr1);

const allUsers = [
  {
    name: "ankit",
    age: 12,
    active: true,
  },
  {
    name: "ravi",
    age: 22,
    active: false,
  },
  {
    name: "harsh",
    age: 19,
    active: true,
  },
  {
    name: "ashutosh",
    age: 50,
    active: true,
  },
];

console.log(allUsers);

/// print all users who are active

// allUsers.forEach((user) => {
//   if (user.active) {
//     console.log(user);
//   }
// });

const activeUsers = allUsers.filter((user) => user.active);
const gt18AgeUsers = allUsers.filter((user) => user.age > 18 && user.age <= 20);

// print all users whoes age is >18
console.log(activeUsers);
console.log(gt18AgeUsers);

// all the users who is active but we only name and age property in user
// forEach , map, filter
// const usersNameAndAge = allUsers.map((user) => {
//   if (user.active) {
//     return {
//       name: user.name,
//       age: user.age,
//     };
//   } else {
//     return null;
//   }
// });

allUsers
  .filter((item) => item.active)
  .map((user) => {
    return { name: user.name, age: user.age };
  })
  .forEach((item) => console.log(item));

// console.log(usersNameAndAge);

//==> 6
// ""
// ''
// ``--> template literals

let x = 10;
const msg = `value of x is ${x}`;
const baseURL = "https://substringtechnologies.com";
const nameVal = "ramu";

const url = `${baseURL}/api/v1/users?name=${nameVal}`;
console.log(url);

// 7. ----> Destructing Assignment

// const a = nums[0];
// const b = nums[1];
// const c = nums[2];
// const [a, b, c] = [{}, {}, {}];
// console.log(a, b, c);
const [user1, user2, user3] = allUsers;
console.log(user1, user2, user3);

const product1 = {
  title: "iphone",
  price: 10001,
  live: true,
  discount: 15,
  imageUrl: "",
  category: "trending phone",
};

const { title, price, live } = product1;
console.log(title, price, live);

function getUsers() {
  return [];
}

function useState() {
  return [];
}

function getUser() {
  return {};
}

const [u1, u2] = getUsers();

const [value1, value2] = useState();

const { name, adhar, phone } = getUser();

// 8==> Spread :

const phones = [100, 101, 102];
const newPhones = [...phones, 104, 105, 101010];
console.log(newPhones);
const newProduct = {
  ...product1,
  quantity: 10,
};
console.log(newProduct);

// 9==> { }

const studentName = "Anurag";
const college = "GITM";

const student = {
  studentName,
  college,
};

console.log(student);
