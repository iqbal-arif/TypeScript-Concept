var names = ["Luigi", "mario", "yoshi"];
//Varible defined as Array can be redeined as any other type.
//Array entity needs to be the same TYPE in order for TS to compile it. See below
//console.log(names.push(4));
//names[0]=3;
names[1] = "arif";
console.log(names);
var numbers = [10, 20, 30, 40];
//Won't Work
//numbers.push("arif");
//numbers[2]="iqbal"
//Does Work
numbers.push(50);
numbers[2] = 70;
//Array defined as mixed initially works with TypeScript
var mixed = ["ken", 4, "chun", 6, 9, true];
mixed.push("arif");
mixed.push(59);
mixed[0] = true;
