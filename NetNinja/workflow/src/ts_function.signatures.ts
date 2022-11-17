//Function Signatures: use to define the Output type of the Function result

//Example 1

let greet: (a:string, b:string) => void;


greet = (name:string, greeting:string) =>{
    console.log(`${name} says ${greeting}`);
}

// Example 2

let calculator: (a:number, b:number, c:string) => number;

calculator = (number1: number, number2:number, action:string) =>{
    if (action==="add"){
        return number1+number2;
    }else{
        return number1-number2;
    }
}

// Example 3

let logDetails2: (obj:{name:string, age:number}) => void;

type person = {name:string, age:number};

logDetails2 = (ninja:person) =>{
    console.log(`${ninja.name} is ${ninja.age} years old`);
}

