// let a=10
// const b=43
// var c=45
// console.log(a,b,c);

let a=300
if(true){
    let a=3
    const b=45
//     console.log("Inner :" ,a);
}
// console.log(a);


function one (){
    const name="khushi"
    console.log(name);
    function two() {
        const web="youtube"
        console.log(name);
        console.log(web);
    }
    // console.log(web);
    two()

}
one()