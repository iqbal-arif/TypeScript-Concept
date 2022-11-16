
// Any Type Variable

import { convertToObject } from "typescript";

let age:any = 25;

age=true;
console.log(age);

age="hello";
console.log(age);

age = {name:"lugi"};
console.log(age)

let mixed: any[] =[];

mixed.push(5);
mixed.push("5");
mixed.push(false);

console.log(mixed);

let ninja: {name:any, age:any};

ninja = {name:"arif", age:25};
console.log(ninja)

ninja = {name:true, age:"25"};
console.log(ninja)