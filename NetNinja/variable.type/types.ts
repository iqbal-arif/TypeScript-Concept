const cir  =  (diameter:number)=>{
    return diameter * Math.PI;
}
// when the variable type is strictly defined. TypeScript does not complie it. Ative the log to see it in action
//console.log(cir('hello'));
console.log(cir(8.5));