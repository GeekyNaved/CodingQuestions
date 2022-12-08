// // bind method
// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     city: "Durg",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     },
//     display: function () {
//         console.log(this.city);
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);
  
// //   console.log(fullName());
// let soln = person.display.bind(person);
// setTimeout(soln,2000);


// // call method
// // 
// let person1 = {
//     firstName: 'john',
//     lastName: 'doe'
// }

// let person2 = {
//     firstName: 'Mary',
//     lastName: 'Jane'
// }

// let getFullName = function() {
//     // console.log('this', this)
//     return this.firstName + ' ' + this.lastName;
// }

// let getAddress = function(city, state, country) {
//     return city + ',' + state + ',' + country;
// }

// let fNameOutput = getFullName.call(person1)
// let addressOutput = getAddress.call(person2, 'durg', 'CG', 'INDIA')
// console.log(fNameOutput);
// console.log(addressOutput);


// // block scope and function scope 
// let a = 10;
//     function f() {
//         if (true) {
//             let b = 9
 
//             // It prints 9
//             console.log(b);
//         }
 
//         // It gives error as it
//         // defined in if block
//         console.log(b);
//     }
//     f()
 
//     // It prints 10
//     console.log(a)



// // pure function
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3,5))

// // not a pure function 
// var x = 2;
// function sum(a,b){
//     return (a+b)/x;
// }
// console.log(sum(8,9))



// //rest operator
// const print = (...a) => console.log(a);
// print(3,4,5,6,7,8,9,10)


// // spread operator with arrays
// const a = [1,2,3]
// const b = [...a, 4,5]
// console.log(b)

// // spread operator with objects
// const person1 = {
//     name: 'john',
//     age: 30
// };

// const person2 = {
//     ...person1,
//     city: 'UK'
// }
// console.log('person2', person2)




// arrow function with this keyword
// var person = {
//     name: 'naved'
// }
//     const hello = (x, y) => {
//         console.log('hi', x, y);
//         console.log(this.person);
//     }
//     hello(90, 99);



// output - 1,2,7,8,9,4,5
// let a = [1,2,3,4,5];
// let b = [7,8,9];
// a.splice(2,1,7,8,9);
// console.log(a);
// 2 represents position
//  1 represents no. of elements to be removed
// rest are new elements to add in array



// working due to hoisting
// console.log(a());
// function a() {
//  console.log(1);
//  setTimeout(() => {
// 	console.log(2)
//  });
//  console.log(3);
// }

// not working due to Reference Error- a is used before initialization
// console.log(a());
// const a = function() {
//  console.log(1);
//  setTimeout(() => {
// 	console.log(2)
//  });
//  console.log(3);
// }
