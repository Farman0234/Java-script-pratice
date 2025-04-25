///pratice conditionals

//if statements

let age = 9;

if (age >= 18) {
  console.log("cane vote ");
} else {
  console.log("not vote");
}

let num = 4;

if (num % 2 === 0) {
  console.log(num, "is even number");
} else {
  console.log(num, "id odd number");
}

//marks

// let marks = Number(prompt("Enter your Marks"));

// if (marks >= 90 && marks <= 100) {
//   console.log("A+");
// } else if (marks >= 80 && marks < 90) {
//   console.log("A");
// } else if (marks >= 70 && marks < 80) {
//   console.log("B");
// } else if (marks >= 50 && marks < 70) {
//   console.log("C");
// } else if (marks >= 33 && marks < 50) {
//   console.log("E");
// } else if (marks >= 0 && marks < 33) {
//   console.log("F");
// } else {
//   console.log("Invalid Marks");
// }

//loops

// for (let i = 1 ; i <= 10  ; i++ ){
//   console.log("hello Word")

// }

// let sum = 0 ;

// for( let i =1 ; i <= 15 ; i++){
//   sum = sum + i;

// }

// console.log(sum , "= sum");


// // for of loop

// let str = "Java-Script"

// let size =0

// for( let i of str )
// {
//   console.log("=i" , i  );
//   size++;
// }


// console.log ("string Size =",size)


//for in lop

// let student ={
//   name :"Farman",
//   age :"23",
//   Subject :"Javascript",
//   Cgpa : "4.8",
//   isPass : "true"

// }

// for (let i in student)
// {
//   console.log("i" , i  , "value" , student[i])
// }




// //print all even number from 0 to 100



// for( let  number = 0 ; number <= 100; number++)
// {
//   if (number % 2 ==0 ){
//     console.log(" its is even number", )
//   }
// }


//random game number

// let gameNumber =100;


// let userNUm = Number(prompt("Guess The Number"))
 
// while( userNUm !== gameNumber){
//  userNUm = Number(prompt("your enter a wrong number"))
// } 
// console.log("your a win")



let number = 5

for( let i = 1; i<=10 ; i++){

  console.log( number + "x" + i + "=" +(number*i)  )
}



///pattern stars 

for( let i =1 ; i <=10; i++ )
{
  let stars =""

  for(let h = 1 ; h<= i; h++)
    {
      stars+= "*"
  }
  console.log(stars)
}