"use strict";
//Defining Variable inline with InPerson property as such
let someone;
//  Defining Person Object that complies to InPerson signatures
const you = {
    name: "shaun",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
//  Defining greeting Function that would comply to Inperson Signatures
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
greetPerson(you);
console.log(you);
