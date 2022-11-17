// By Default the function is consider as function after declaration
let great = () =>{
    console.log("Hello")
}
// Won't allow because it is declared as function.
//greet = 6;

//Proper way of Declaring Function
let greeting : Function;

greeting =()=>{
    console.log("Hello there again!")
}

// Passing and Defining Parameters Type in function

const add = (a:number,b:number) =>{
    console.log(a+b)
}
add(3,4)

//Adding Third Optional parameter as String or Number
const add2 = (a:number,b:number, c?:number|string) =>{
    console.log(a+b)
    console.log(c)
}

add2(5,6,"3")

//Adding Third Parameter as String or Number with Default value
//  Any Function without Return statment "SHOWS VOID in TS"
const add3 = (a:number,b:number, c:number|string = 5) =>{
    console.log(a+b)
    console.log(c)
}

add3(5,6,"3")

// TypeScript infere the function type by default base on the parameter

const minus = (a:number, b:number) =>{
    return a-b;
}

let result  = minus(7,3)

//FOr explicit declaration of function to number add number after parameter as follows
const minus2 = (a:number, b:number):number =>{
    return a-b;
}
