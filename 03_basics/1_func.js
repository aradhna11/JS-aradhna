// function add (num1,num2){
//     console.log(num1+ num2);
// }
// add(23,4)

function loginUser(username) {
    return `${username} just logged in`
}
// console.log(loginUser("aradhnaa"));

function calculate(...num1){
    return num1
}
// console.log(calculate(200,3,4533,245));

const user ={
    username:"aru",
    price:1223
}

// now handling object in function

function handleObject(anyobj){
    // console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}

// handleObject(user)
// OR
handleObject({
    username:"aru",
    price:12
})

const MyArr= [2,34,7,89]

function display(arr){
    return arr[2]
}
console.log(display(MyArr));
console.log(display([23,5,6,7,32]));