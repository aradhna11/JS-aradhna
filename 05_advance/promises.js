// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         console.log('Async task is completed');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task 2");
//         resolve()
//     },1000)
// }).then (function () {
//     console.log("async 2 resolved");
// })

const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
    resolve({usernam:'aradhna', age:20})
   },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username:'aradhna', age:20})
        }
        else{
            reject('ERROR :WARNING')
        }
    },1000)
})

// async and await 

async function consumePromiseFour(){
    const response=await promiseFour
    console.log(response);
}
consumePromiseFour()

// handling error 

async function consumePromiseFour(){
    try {
        const response=await promiseFour
//     console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFour()