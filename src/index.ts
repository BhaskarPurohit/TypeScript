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

const newArry:number[] = [1,2,43,35,765] //array that can have only numbers

const nameArray:string[] = ["bhaskar","purohit"] //can contain only strings

//another way to define array
const myArray:Array<number> = [1,2,3456,76532,24]
const mixedArray:Array<number|string> = [1,"fdgsbv"]

const fiexdArray:[number, number, number] = [1,2,3] //this is a tuple, i.e. has fixed number of elements


/*Objects in TypeScript*/
type Obj = {
    height:number,
    weight:number,
    gender:boolean  //if we write gender? then gender property becomes optional other wise all other properties are mandatory
}

//another way is 
type functionType = (n:number, m:number)=>number
interface Obj2{       //using interface we can apply inheritance
    objName:string,
    objAge:number,
    func: functionType
}

const person:Obj2 = {
    objName:"bhaskar",
    objAge:26,
    func: (p,q)=>{
        return p+q
    },
}


const obj:Obj={
    height: 23,
    weight:34,
    gender:true,
}