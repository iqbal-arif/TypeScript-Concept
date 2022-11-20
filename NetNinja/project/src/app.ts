import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";



// FORM Selection
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form.children)

//INPUTS Selection

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// Selecting the list instance
const ul = document.querySelector("ul")!;

const list = new ListTemplate(ul)

// Adding Event Listener to form

form.addEventListener("submit", (e:Event)=>{
    e.preventDefault();

    //Defining Values through TUPLES
    let values:[string,string,number];

    values = [toFrom.value,details.value,amount.valueAsNumber]

    //Storing Values in doc variable
    let doc:HasFormatter;

    if (type.value==="invoice"){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)

    }

    list.render(doc,type.value,"start" )
    console.log(doc)
    // console.log(
    //     type.value,
    //     toFrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // )

})






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