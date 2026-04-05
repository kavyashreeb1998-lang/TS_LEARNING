//Function: It is reusable block of code that runs only when its called.
export{}
// function add(i:number, b:number){
//     console.log(i+b)

// }
// add(5,6);
// ///////////////
// function add1(i:number, b:number){
//     return(i+b)
// }
// let addition=add1(10,15);
// console.log(addition)
///////////////////
// function add2(i:number, b?:number){
//     return(i,b)
// }
// let addition1=add1(10,15);
// let addition2=add2(10);

// console.log(addition1)
// console.log(addition2)
// function add3(i:number, b?:number){
//     if (b===undefined){
//         console.log("Only one parameter is passed;")
//     }
//     else{
//         console.log("the total sum is:", i+b)
//     }
// }
// add3(5,3);
// add3(5);
//////////////
function add4(i?:number, b?:number){
    if(i === undefined && b == undefined){
        return 0;
    }
    else if(i===undefined){
        return(0+b!)
    }
    else if (b===undefined){
         return(i!+0)
    }
    else {
        return(i+b)
    }
}
let kav=add4(5,3);
let kav1=add4(0,5);
let kav2=add4(9);
let kav3=add4();

console.log(`The DOB of kavya ${kav} is`)
console.log(kav2)
console.log(kav3)
/////
function me(i?:string,k?:number){
    if(k===undefined && i===undefined){
        console.log(`My name is ${i}`)
    }
    else{
        console.log(`My name is ${i} and my age is ${k}`)
    }
}
me("kavya",28)
me("shree")
me()
/////
// function travel(Days?:number,Expenses?:number){
//     if(Days===undefined && Expenses===undefined){
//         return("She is not Travelling")
//     }
//     else if(Days===undefined){
//         return(`She just planned her Expenses of Rupees ${Expenses}`)
//     }
//     else if(Expenses===undefined){
//         return(`She just planned number of days ${Days}`)
//     }
//     else{
//         return(`The Totally budject of trip is Rupees ${Expenses} & she is spending 4weeks that is ${Days} Days in UK`)
//     }

// }
// let plan=travel()
// let plan1=travel(0,5)
// let plan2=travel(5)
// let plan3=travel(28,200000)
// console.log(plan)
// console.log(plan1)
// console.log(plan2)
// console.log(plan3)
////////////////////
//Ananymus function is a function without Name.
//Ananymus function gets used as part for a function parameter.
//Ananymus function gets used with arrow key function.
//////////////////
//Ananymus function is a function without name -> it gets used as a part of function parameter -> it get used with arrow key function.
let nest=function()
{
    console.log("give me a ticket")
}
nest();
let nest1=()=>{
    console.log("Give me Money")

}
nest1();
////////////////
let travel=(Days?:number,Expenses?:number)=>{
    if(Days===undefined && Expenses===undefined){
        return("She is not Travelling")
    }
    else if(Days===undefined){
        return(`She just planned her Expenses of Rupees ${Expenses}`)
    }
    else if(Expenses===undefined){
        return(`She just planned number of days ${Days}`)
    }
    else{
        return(`The Totally budject of trip is Rupees ${Expenses} & she is spending 4weeks that is ${Days} Days in UK`)
    }

}
let plan=travel()
let plan1=travel(0,5)
let plan2=travel(5)
let plan3=travel(28,200000)
console.log(plan)
console.log(plan1)
console.log(plan2)
console.log(plan3)
//////////////
let add1=(i:number,j:number)=> {
    return(i+j)
}
let addition= add1(10,1)
console.log(addition)
///////////
setTimeout(() => {
    console.log("Print after 3sec")
}, 3000);