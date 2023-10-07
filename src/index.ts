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