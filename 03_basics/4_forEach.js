const coding=["js","ruby","java","python","cpp"]

// const values= coding.forEach((item)=> {
//     console.log(item);
// })
// console.log(values);

const numbers =[1,23,4,5,2,3,456,7]
// const newnum= numbers.filter((num)=> num>4)
// const newnum= numbers.filter((num)=> {
//    return num>4
// })
// console.log(newnum)

const nums=[]

numbers.forEach((num) => {
    if(num>4){
      nums.push(num)
    }
})
console.log(nums);