// Defining Interface (It defines how Object should look)
interface IsPerson {
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;
}

//Defining Variable inline with InPerson property as such
let someone:IsPerson;

//  Defining Person Object that complies to InPerson signatures

const you: IsPerson ={
    name:"shaun",
    age:30,
    speak(text:string):void {
        console.log(text)
    },
    spend(amount:number) :number{
        console.log('I spent', amount);
        return amount;
    },
};

//  Defining greeting Function that would comply to Inperson Signatures

const greetPerson = (person:IsPerson) =>{
    console.log('Hello', person.name);
}

greetPerson(you);

console.log(you)
