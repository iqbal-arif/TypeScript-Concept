// Defining type to reduce long string and applying DRY rule

type StringOrNum = string | number;
type ObjectName = { name:string, uid:StringOrNum};

const logDetails = (uid: StringOrNum, item:string) =>{
    console.log(`${item} has a uid of ${uid}`);
}

const greetOnce = (user:ObjectName) =>{
    console.log(`${user.name} says Hello`);

}

const greetTwice = (user:ObjectName) =>{
    console.log(`${user.name} says Hello again`);

}