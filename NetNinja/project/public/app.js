import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// FORM Selection
const form = document.querySelector(".new-item-form");
// console.log(form.children)
//INPUTS Selection
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// Selecting the list instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
// Adding Event Listener to form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //Defining Values through TUPLES
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    //Storing Values in doc variable
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "start");
    console.log(doc);
    // console.log(
    //     type.value,
    //     toFrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // )
});
/*
// Initiall written to explain the concept
//  Defining the Type of each variable (Invoice, Payment)
let docOne:HasFormatter;
let docTwo:HasFormatter;

// Defining the Invoice and Payment instances that complies to HasFormatter
docOne = new Invoice("yogi", "website work", 2500);
docTwo = new Payment("moo", "Logo Branding", 500);

// Defining Array that complies with HasFormatter signature
let docs:HasFormatter[]=[];

// Pushing the instances in the array
docs.push(docOne);
docs.push(docTwo);

// Logging the Array elements
console.log(docs);
*/ 
