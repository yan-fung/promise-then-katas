/* 

DO NOT change the names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

*/

// 1 Create a function that returns a resolving promise
// Example:
// returnPromise() resolves

const returnPromise = () => { };

// 2 Create a function that returns a promise which retutrns 10 if it resolves succesfully
// Example:
// returnTen() resolves to 10

const returnTen = () => { };

// 3 Create a function that returns a promise which retutrns "An error occurred" if it rejects
// Example:
// anError() rejects to "An error occurred"

const anError = () => { };

// 4 Create a function that returns a promise which resovles to "happy" if the parameter is greater than 
// or equal to 1 and rejects to "sad" if the value is less than 1
// Example:
// happySad(1) resolves to "happy"
// happySad(0) rejects to "sad"

const happySad = () => { };

// 5 Create a function that returns a promise which resovles to a function that returns "My name is <input name>" 
// Example:
// myNameIs() resolves to a function that takes one argument, name, and returns "My name is name" 

const myNameIs = () => { };


module.exports = {
    returnPromise,
    returnTen,
    anError,
    happySad,
    myNameIs
}