// ENUMS
// Allows to store set of constants and keywords and associate them with numberic value

enum ResourceType {BOOK,AUTHOR,FILM,DIRECTOR,PERSON}



interface Res<T>{
    uid:number;
    resourceType:ResourceType;
    data:T;
}

const  docOne:Res<object> = {
    uid:1,
    resourceType:ResourceType.BOOK,
    data:{title:"name of the book"}
}

const  docTwo:Res<object> = {
    uid:10,
    resourceType:ResourceType.FILM,
    data:{name:"Author"}
}


// Console log will give the index number for each resource

console.log(docOne,docTwo)
