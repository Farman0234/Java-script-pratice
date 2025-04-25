// function sum() {
//   let a = Number(prompt("Enter a value"));
//   let b = Number(prompt("Enter b value"));
//   console.log("sum = ", a + b);
// }
//  sum();

// argument
// function name(name) {
//   console.log("Hi grettng", name);
// }
//paramerters
// function calling
// name(" Faramn Anees ");

// Functions from sir

// function sayGreet() {
//   console.log("dfsd");
//   alert("I am caleed from function inside , sayGreet");
// }

// sayGreet()

// Arguments
// function login(email, password) {
//   console.log("email", email);
//   console.log("password", password);

//   return email;
// }

// Function Calling
// Parameters
// let xyz = login("z@gmail.com", "32546768");
// console.log("XYZ", xyz);

// Government
// function checkAgeEligibility(age) {
//   let isEligible = false;

//   if (age >= 18) {
//     isEligible = true;
//   }

//   console.log(isEligible)
//   return isEligible;

// }

// checkAgeEligibility(18)

// // My Own
// function locallyCheckAgeEligibility(age) {
//   let isEligible = checkAgeEligibility(age);
//   if (isEligible == false) {
//     alert("You are eligible");
//   } else {
//     alert("You are not eligitble");
//   }
// }
//   locallyCheckAgeEligibility();

// function checkAvailableSeats() {
//   console.log("Available seats are 34 545");
// }

// checkAvailableSeats()

// function loginFormSubmit() {
//   console.log("I am submitted");
// }

//function js

function my_function() {
  console.log("This is my First Function");
}
for (let i = 0; i <= 5; i++) {
  my_function();
}

function form(name, mobile) {
  return name;
}
let data = form("Farman", "0321-5868003");

console.log(data);

function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(100, 100);

//Arrow Functions

const adding = (a, b) => {
  console.log(a + b);
};
adding(32, 22);

const mul = (a, b) => {
  return a * b;
};
let retur = mul(5, 2);
console.log("this Multiply using arrow function", retur);

const printHello = () => {
  for (let i = 1; i <= 5; i++) {
    console.log("Hello Word");
  }
};
printHello();

//countiio vowels of string

// function countVowels(str) {
//   let count = 0;

//   for (const char of str) {

//     char.toLowerCase
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++
//     }

//   }
// return count
// }
// let total = countVowels("Farman Anees");
// console.log(total)



//using arrow function



// let vowels = (st)=>{

// let count =0 ;

//   for (const char of st) {

//         char.toLowerCase
//         if (
//           char === "a" ||
//           char === "e" ||
//           char === "i" ||
//           char === "o" ||
//           char === "u"
//         ) {
//           count++
//         }
    
//       }
//     return count;
// }
// vowels()




/// for each loop in arrys
//callback Function


let arr =[1,2,3,4,5,6,7]

arr.forEach((val)=>{
  console.log(val)
})


let city =["Lahore","Karachi","Islamabad","Rawalpindi"]

city.forEach((val,idx,city)=>{
  console.log(val.toUpperCase(),idx,city)
})

//high oder function /Method is For each loop




let saqure =[4,6,7,8,10,55,77]

saqure.forEach((num)=>{

console.log(num*num)

})


// Map

// let nums =[2,3,5,6,7]

// let newArry = nums.map((val)=>{

// return val*val;

// })

// console.log(newArry)


//Filter arry

let =[1,2,3,4,5,6,7,8,9,10]

let newArr = arr.filter((val)=>{

return val % 2 === 0;


})  

console.log(newArr)



//filter a marks above 90


let marks = [90,100,87,99,90,80,22]

let newMarks = marks.filter((val)=>{

  return  val > 90
})
console.log(newMarks)



let n = prompt("Enter A Number: ")

let arry =[];


for(let i =1 ; i<= n ; i++){
  arry[i-1] = i;
}

console.log(arry)



let suma = arry.reduce((res,curr)=>{
  
  return res+curr;

})
console.log(suma)


let factorial = arry.reduce((res,curr)=>{
  
  return res*curr;

})
console.log(factorial)

