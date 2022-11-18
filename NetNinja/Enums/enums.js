"use strict";
// ENUMS
// Allows to store set of constants and keywords and associate them with numberic value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "name of the book" }
};
const docTwo = {
    uid: 10,
    resourceType: ResourceType.FILM,
    data: { name: "Author" }
};
// Console log will give the index number for each resource
console.log(docOne, docTwo);
