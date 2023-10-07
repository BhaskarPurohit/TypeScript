/*

let a:number  = 34
let check:boolean = false
let userName:string = "bhaskar"
let newVar = <string>"my name is Bhaskar"
let age:string | number   //can be both string and number

const func = (m:number,n:number) =>{
    return m*n  //returns number
    return String(m*n) //returns string
}

const func2 = (m:number, n:number):number =>{  //:number on the function means will return only number
    return  m+n
}

*/


/** Array in typescript*/

type UserName = string| number  //this is type alias
let a:UserName = 34   //we created a UserName data type which can be string or number only

//example

type intFunction = (n:number, m:number)=>number //making a type alias for function that will deal with integers only

//declaring a function that is of intFunction type
const addTwoNum:intFunction = (p,q)=>{
    return p+q
}