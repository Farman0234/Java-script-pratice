// let marks = [88,99,88,99,99,99,22,];

// console.log(marks)
// console.log(marks.length)

let students = ["Farman", "Ali", "IRFAN", "Hamza"];

console.log(students);
console.log(students[2]);

// marks[3] = 76
// console.log(marks)

//looping over

// let employees = ["Sajid","Usman","Farman","Bilal","Hassan","Faizan","Umer","Noman","Ahmed"]

//for lop
//  for(let index=0; index < employees.length; index++){
//     console.log(employees[index])
//  }

//  for (let i of employees){
//     console.log(i.toUpperCase() )
//  }

//  let marks =[50,44,55,66,99,100,100,22,33,88,78]

//  let sum =0

// for (let value of marks){
//     sum+=value
// }
// let avg = sum/marks.length
// console.log("average marks of class student = " ,avg)

let items = [600, 700, 1000, 500, 800, 900];

let i = 0;

items.push(2000);

// for (let val of items){

//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`)
//     i ++ ;
// }

for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log(items);

//ARRY METHODS

let heros = ["spiderman", "SuperMan", "Batman", "Ironman", "Hulk"];

console.log(heros);
console.log(heros.slice(1, 4));

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(number);

number.splice(3, 4, 200, 200, 200);

console.log(number);

//

let company_Name = [
  "Bloomberg",
  "Microsoft",
  "Uber",
  "Google",
  "IBM",
  "Netfilx",
];

//remaove the first coutry in arry

console.log(company_Name);
console.log(company_Name.pop()); //remove last name
console.log(company_Name);
console.log(company_Name.shift()); //Reomve first name
console.log(company_Name);

company_Name.splice(1, 1, "Ola");

console.log(company_Name);

company_Name.push("Amazon");
console.log(company_Name);
