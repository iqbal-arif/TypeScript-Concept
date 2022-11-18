// Classes in Classical way with READ, PRIVATE & READONLY Modifier

class InvoiceClasical{
    
    //ReadOnly allows modification only readonly inside / outside of class
    readonly client:string;
    //Private allows modification only inside of class
    private details:string;
    //Public allows modification both inside / outside of class
    public amount:number;

    constructor(c:string,d:string,a:number){
        this.client =c;
        this.details=d;
        this.amount=a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}


// Classes in TypeScript with READ, PRIVATE & READONLY Modifier

export class Invoice{
    constructor( 
        readonly client :string,
        private details:string,
        public amount:number){  }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}


const invOne = new Invoice("mario", "website", 459);
const invTwo = new Invoice("jad", "design work", 900);

let invoices: Invoice[]=[];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices)

invoices.forEach(inv =>{
    console.log(inv.client, inv.amount, inv.format())
})