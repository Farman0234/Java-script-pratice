function calculator(){

let num1 = Number(prompt("Enter a first Number "));
let num2 = Number(prompt("Enter a Second Number"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("You enter a Invalid Number");
}

let operators = prompt("Enter A Operator (+,-,*,/,):");

let result;

if (operators === "+") {
  result = num1 + num2;
} else if (operators === "-") {
  result = num1 - num2;
} else if (operators === "*") {
  result = num1 * num2;
} else if (operators === "/") {
  if (num2 === 0) {
    console.log("Cannot divided by Zero");
  }
  result = num1 / num2;
} else {
    console.log("You Enter Invalid operator")
}   
console.log("This is result: " + result);
}

calculator();