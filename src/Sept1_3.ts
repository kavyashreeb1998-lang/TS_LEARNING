export{}
//null is different and zero is different both are not same 
//null represents the intentional absence of any object value 
let abc: null|string|number = "kav";
console.log(abc)
abc=10;
let kav1:undefined|number=11;
console.log(kav1)
kav1=1;
let abcd:string|null;
abcd=null;
console.log(abcd)
///////////////////
const PII:number=893.8937;
console.log(PII);
const radhe={
    god:"Radha Krishna",
    howMuchYouLike: 1000000000,
}

const radhe1={
    god:"Radha Krishna",
    howMuchYouLike: 1000000000,
}
if(radhe===radhe1){
    console.log(true)
}
else{
    console.log(false)
}
radhe.god= "Radha Krishna1"
console.log(radhe)
//the data type union allows a varriable to hold more than one tywp of vale 
//array is the collection of single type of value stored in single variable.
//tuple is the fixed lenght array that can hold same or different types of value. 
let jqk:number[]=[2434,895.324]
jqk[1]=111
console.log(jqk)
/////////////////////// 
