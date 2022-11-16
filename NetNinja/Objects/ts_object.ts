//Objects

let ninja = {
    name: 'mario',
    belt: "black",
    age: 30
}

ninja.age = 40;
ninja.name ="arif";
//Cannot change variable type
ninja.age ="40";


//Cannot add new property
ninja.skills = ["fighting", "sneaking"];


//Can modify the values if keys are the same

ninja = {
    name: 'arif',
    belt: "blue",
    age: 60
}


//But Cannot add new key : value or change the variable types

ninja = {
    name: 80,
    belt: "blue",
    age: "60",
    skills:[],
}
