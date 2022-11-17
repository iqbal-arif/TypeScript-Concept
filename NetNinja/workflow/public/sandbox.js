"use strict";
// By Default the function is consider as function after declaration
let great = () => {
    console.log("Hello");
};
// Won't allow because it is declared as function.
//greet = 6;
//Proper way of Declaring Function
let greeting;
greeting = () => {
    console.log("Hello there again!");
};
// Passing and Defining Parameters Type in function
const add = (a, b) => {
    console.log(a + b);
};
add(3, 4);
//Adding Third Optional parameter as String or Number
const add2 = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add2(5, 6, "3");
//Adding Third Parameter as String or Number with Default value
//  Any Function without Return statment "SHOWS VOID in TS"
const add3 = (a, b, c = 5) => {
    console.log(a + b);
    console.log(c);
};
add3(5, 6, "3");
// TypeScript infere the function type by default base on the parameter
const minus = (a, b) => {
    return a - b;
};
let result = minus(7, 3);
//FOr explicit declaration of function to number add number after parameter as follows
const minus2 = (a, b) => {
    return a - b;
};
