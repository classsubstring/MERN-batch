//-- repeat

// for(let i=1;i<=100;i++)
// {

// console.log("Fun Loop concepts");

// }

//Print all even number from 1 to 100.
// for(let i=1;i<=100;i++){
//     if(i%2==0)
//     {
//         console.log(i)
//     }
// }

// WAP to print all prime number from 1 to 100.

//What is prime number
// n --- 1, n

//Factor---2

// function ramu(n)
// {
//     let count =0
//     for(let i=1;i<=n;i++)
//     {
//         if(n%i==0)
//         {
//             count++
//         }
//     }

//     if(count==2)
//         return true
//     else
//         return false
// }

// for(let i=1;i<=100000;i++){
//     if(ramu(i))
//     {
//         console.log(i)
//     }
// }

// while(condition)
// {
//     //body
// }

// do --while

// do{

//     //body
// }while(condition);

//

// const users=['ankit','raman','suman']

// for(const item of users)
// {
//     console.log(item)
// }

const users = [
  {
    name: "ankit",
    age: 23,
  },
  {
    name: "raman",
    age: 56,
  },
];

for (const user of users) {
  console.log(user.name);
}

const product = {
  title: "Iphone 16 pro",
  price: 150000,
  ram: "500MB",
};

for (const key in product) {
  console.log(key + " : " + product[key]);
}
