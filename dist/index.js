"use strict";
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
let a = 34; //we created a UserName data type which can be string or number only
//declaring a function that is of intFunction type
const addTwoNum = (p, q) => {
    return p + q;
};
const newArry = [1, 2, 43, 35, 765]; //array that can have only numbers
const nameArray = ["bhaskar", "purohit"]; //can contain only strings
//another way to define array
const myArray = [1, 2, 3456, 76532, 24];
const mixedArray = [1, "fdgsbv"];
const fiexdArray = [1, 2, 3]; //this is a tuple, i.e. has fixed number of elements
const person = {
    objName: "bhaskar",
    objAge: 26,
    func: (p, q) => {
        return p + q;
    },
};
const obj = {
    height: 23,
    weight: 34,
    gender: true,
};
