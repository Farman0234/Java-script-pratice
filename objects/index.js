//key Value 
//Hash data structure

let person = {
    name : "Farman", 
    hobby :"nothing",
    age: "18",
    number: "0321-5868003",
    cnic: "35202-9325365-3" ,
    
}

console.log(person)

person.hobby = "programing"

console.log(person)

if (!person.doesenotabove18 ){
    
    delete person.cnic
    
}
console.log(person)

//Array

let personName  = [{
    name : "Farman", 
    hobby :"nothing",
    age: "18",
    number: "0321-5868003",
    cnic: "35202-9325365-3" ,
    
},
{
    name : "Farman", 
    hobby :"nothing",
    age: "18",
    number: "0321-5868003",
    cnic: "35202-9325365-3" ,
    
},
{
    name : "Farman", 
    hobby :"nothing",
    age: "18",
    number: "0321-5868003",
    cnic: "35202-9325365-3" ,
    
}]
console.log(personName)



personName.map((person)=>{


    console.log(person.name)
});


//Filter
//find



