// singleton
// object.create

// object literals

// symbols

const mysymbol= Symbol("key11")

const user ={
    name:"Aradhna",
    "full name":"aradhna sharma",
    age:20,
    [mysymbol]:"mykey",
    email:"khushi@gmail.com",
    isLoggIn:false,
    lastloginDays:["monday","sunday"]
}
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mysymbol]);

// functions

user.greet =function(){
    console.log("hello js user");
}

user.greetTwo =function(){
    console.log(`hello js Headers, ${this.name}`);
}

console.log(user.greet());
console.log(user.greetTwo());