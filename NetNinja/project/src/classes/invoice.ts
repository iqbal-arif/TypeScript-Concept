import { HasFormatter } from "../interfaces/HasFormatter"

// Classes with READ, PRIVATE & READONLY Modifier

export class Invoice implements HasFormatter{
    constructor( 
        readonly client :string,
        private details:string,
        public amount:number){  }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}