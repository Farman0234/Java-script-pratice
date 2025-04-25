
function isPrime(number) {
    if (number <=1)
    {
        return false;
    }


for (let i = 2 ; i< number ; i++){
    if(number % i === 0 ){
        return false;
    }
}
return true;
}
// let prime = isPrime(2)

// console.log(prime)


let num = Number(prompt("Enter a Number"))

if (isPrime(num)){
    console.log("It iS a Prime Number =", + num);
}else{
    
    console.log("It iS not a Prime Number =", + num);
}