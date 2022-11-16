import { nodeModuleNameResolver } from "typescript";

//Explicit Types
let character:string;
let age:number;
let isLoggedIn:boolean;

age = "asrif"
age=34;

isLoggedIn = 34;
isLoggedIn =true;

//Arrays

let ninja : string[] =[];

//Cannot push number type
ninja.push(30);


//Can push string type
ninja.push("30");


//Uion Types

// Union for Array
let mixed: (string|number|boolean)[] =[];

mixed.push("Hello");
mixed.push(20);
mixed.push(true);

console.log(mixed)

// Union for single variable
let uid : string|number;
uid = 123;
uid = "123";

// Union for Object
let ninjaOne: object;
ninjaOne = {name:"yousi", age:30};

// Cannot redefine objectd as a single variable
ninjaOne = "asrif"

// Can define as a Array as array is an object
ninjaOne = []

let ninjaTwo :{
    name: string;
    age: number;
    beltColor:string
}
// Won't allow adding new key value, because not defined initially
ninjaTwo = { name:"ario", age:20, beltColor:"red",skills:[]}
ninjaTwo = { name:"ario", age:20, beltColor:"red"}