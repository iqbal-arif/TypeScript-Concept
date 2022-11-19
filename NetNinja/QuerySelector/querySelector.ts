//Selecting HTML Elements
const anchor2 = document.querySelector("a");

console.log(anchor2);

// Try to get the anchor href value, it through error. TS assumes it is null
// console.log(anchor.href);

// Two ways to solve it
// 1. Method
if (anchor2){
    console.log(anchor2.href);
}

// 2. Add ! in front of the variable as such
const anchor = document.querySelector("a")!;
console.log(anchor.href);

// Selecting Form Elements

const form2 = document.querySelector("form");
console.log(form2)

// Selecting Form through Class selector. This shows ELEMENT but not an HTML Form
// To fix this add as HTMLFormElment in front of the variable