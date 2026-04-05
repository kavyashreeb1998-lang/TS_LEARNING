export{}
console.log("This is my first Program:");

let a:number =10
//a="kavya"
console.log(a)
////
function add(b?:number,c?:number){
    if(b==undefined && c==undefined){
        console.log("For B and C no value is Declared")
    }
    else if(b==undefined){
        console.log(`As we dont have b value gievn have considered it as 0 and the sum is: ${0+c!}`)
    }
    else if(c==undefined){
        console.log(`As we dont have b value gievn have considered it as 0 and the sum is:${0+b}`)
    }
    else{console.log(b+c)}
}
add(10,33)
add(10)
add(0,10)
add()