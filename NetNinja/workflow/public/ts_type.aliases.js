"use strict";
// Defining type to reduce long string and applying DRY rule
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetOnce = (user) => {
    console.log(`${user.name} says Hello`);
};
const greetTwice = (user) => {
    console.log(`${user.name} says Hello again`);
};
