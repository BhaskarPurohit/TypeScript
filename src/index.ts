// /*

// let a:number  = 34
// let check:boolean = false
// let userName:string = "bhaskar"
// let newVar = <string>"my name is Bhaskar"
// let age:string | number   //can be both string and number

// const func = (m:number,n:number) =>{
//     return m*n  //returns number
//     return String(m*n) //returns string
// }

// const func2 = (m:number, n:number):number =>{  //:number on the function means will return only number
//     return  m+n
// }

// */


// /** Array in typescript*/

// type UserName = string| number  //this is type alias
// let a:UserName = 34   //we created a UserName data type which can be string or number only

// //example

// type intFunction = (n:number, m:number)=>number //making a type alias for function that will deal with integers only

// //declaring a function that is of intFunction type
// const addTwoNum:intFunction = (p,q)=>{
//     return p+q
// }

// const newArry:number[] = [1,2,43,35,765] //array that can have only numbers

// const nameArray:string[] = ["bhaskar","purohit"] //can contain only strings

// //another way to define array
// const myArray:Array<number> = [1,2,3456,76532,24]
// const mixedArray:Array<number|string> = [1,"fdgsbv"]

// const fiexdArray:[number, number, number] = [1,2,3] //this is a tuple, i.e. has fixed number of elements


// /*Objects in TypeScript*/
// type Obj = {
//     height:number,
//     weight:number,
//     gender:boolean  //if we write gender? then gender property becomes optional other wise all other properties are mandatory
// }

// //another way is 
// type functionType = (n:number, m:number)=>number
// interface Obj2{       //using interface we can apply inheritance
//     objName:string,
//     objAge:number,
//     func: functionType
// }

// const person:Obj2 = {
//     objName:"bhaskar",
//     objAge:26,
//     func: (p,q)=>{
//         return p+q
//     },
// }


// const obj:Obj={
//     height: 23,
//     weight:34,
//     gender:true,
// }

// type funcType = (n:number,m:number,l?:number)=>number | string 
// //here parameter l is optional

// const multiplyThree:funcType=(n,m,l)=>{
//     if(typeof l === "undefined") return "one parameter missing"  //if l is not defined, it will be undefined

//     return n*l*m
// }


// /**Default parameter */
// type newFunc = (n:number, m:number, l?:number) => number | string

// const defaultParamFunction: newFunc=(n,m,l = 20)=>{
//     return n* m *l
// }


// /*Rest operator 
// if we dont know how many parameters will be passed so we will receive them as arrays
// */
// type funcType2 = (...m:number[]) =>number[]

// const func2:funcType2 = (...m)=>{
//     return m 
// }

// func2(23,34,456,123,13,13)


// /*function with objects*/

// type getDataType = (product:Product) => void

// const getData:getDataType = (product) =>{
//     console.log(product)
    

// }

// type Product = {
//     name:string,
//     stockPrice: number,
//     stock: number,
//     photo:string

// }

// const productOne:Product = {
//     name:"Macbook",
//     stock:46,
//     stockPrice: 1232343,
//     photo: "sampleurl"


// }

// getData(productOne)

// //Never Type

// type themeMode = "light" | "dark"

// const errorHandler = ():never=>{   //declaring the return type
//     throw new Error()  //in case of error, Never is returned 
// }

// const mode:themeMode = "light"

/*---------------------------------------------- */
//Classes in TypeScript
class Player{
    height = 34;
    weight =  78;

    constructor(height:number, weight:number){
        this.height = height;
        this.weight = weight;
    }
}

const bhaskar = new Player(100,150)
console.log(bhaskar.height);
