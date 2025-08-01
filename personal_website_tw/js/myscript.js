console.log("website loading...");
let x = 10;
const y = 20;

console.log(`sum of ${x} and ${y} is ${x + y}`);
console.warn("this is warning")
console.error("this is error")
console.info("this is information")


let firstName = "Raghubeer";
let lastName = "Nath";
let address = `Indra Nagar lucknow: ${firstName} ${lastName}`;
console.log(firstName);
console.log(lastName);
console.log(address);

const salary = 4000;
const discount = 10.9;
console.log(typeof salary);
console.log(typeof discount);
console.log(typeof firstName);
const userIsActive = true;
console.log(userIsActive);

const users = ["raman", "suman", "ankit", "kuman"];
console.log(users[0]);
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 2],
];

console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[1][1]);

const arr = [[[[1, 2, 3]]], []];

//object:

const user = {
  name: "raghu",
  phone: "1090",
  address: "Lucknow",
  email: "user@substring.com",
  isLive:false,
  age: 900,
  gender: "female",
  favoriteMovies: ["shole", "dhamal", "m3", "m4"],
  closeFriends: [
    {
      name: "aman",
      phone: "1091",
      email: "aman@gmail.com",
      age: 10,
      gender: "male",
      favoriteMovies: ["ironman1", "spiderman2"],
    },
    {
      name: "harsh",
      phone: "1092",
      email: "harsh@gmail.com",
      age: 20,
      gender: "male",
      favoriteMovies: ["thor", "thor2"],
    },
  ],

  display: function () {
    console.log("displaying detail");
    console.log(`${this.name} : ${this.phone} : ${this.email}`);
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.favoriteMovies[2]);
console.log(user.closeFriends[1].favoriteMovies);
console.log(typeof user);

console.log(user.display);
user.display();

for(let i=0; i<users.length;i=i+5){
    console.log(users[i])

    // i++
}

// console.table(user)

///////////////////////////////////

/*
if----else

*/

const n=-12

if(n>0)
{
  //True
  console.log("yes its positive number")
}
else
{
  //False
  console.warn("number is either 0 or negative")
}

if(user.isLive){
  console.log("User is live")
}else{
  console.error("user is offline")
}

const product=null

if('0'){
  console.log("product : "+product)
}else{
  console.log("Product is not available")
}

