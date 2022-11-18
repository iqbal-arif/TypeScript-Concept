// GENERICS: Allows to create reuable blocks of code that can be used with different TYPE.

// const addUID = <T>(Obj:T) =>{ (see note 1)
const addUID = <T extends object>(Obj:T) =>{
    let uid = Math.floor(Math.random()*100);
    return {...Obj,uid};
}

let idOne = addUID({name:"yell", age:30});

// the idOne.name shows error as the object is not defined this can be resoveled by capturing the input type as
// 1. <T>(Obj:T) in front of the function definition
// <T> is used to capture Type, any type not specify object or array type.
// 2. <T extends object>(Obj:T) in front the function definition. This is now specific to object type.
// 3. <T extends {name:string}>(Obj:T) This is now specific to object with string type only.
console.log(idOne.name)




// With Interfaces
interface Resource<T>{
    uid:number;
    resourceName: string;
    data:T;
}

// Resource is a string
const itemOne: Resource<string> ={
    uid:1,
    resourceName:"person",
    data:"shaun"
}
// Resource is an Object
const itemTwo: Resource<object> ={
    uid:1,
    resourceName:"person",
    data:{name:"shaun"}
}
// Resource is an Object
const itemThree: Resource<string[]> ={
    uid:1,
    resourceName:"person",
    data:["bread","milk","orange"]
}

console.log(itemOne,itemTwo,itemThree)