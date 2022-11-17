"use strict";
//Function Signatures: use to define the Output type of the Function result
//Example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// Example 2
let calculator;
calculator = (number1, number2, action) => {
    if (action === "add") {
        return number1 + number2;
    }
    else {
        return number1 - number2;
    }
};
// Example 3
let logDetails2;
logDetails2 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
