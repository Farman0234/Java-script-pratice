
function findLargestNumber (){
    let num1 = Number(prompt("Enter a first Value "));
    let num2 = Number(prompt("Enter a first Value "));

    if (num1 > num2){

        console.log("This is Largest Number", +num1)

    }else if (num2 > num1){

        console.log("This is largest Number", +num2)
    }else {
        console.log("Both numbers are equal.")
    }
}
