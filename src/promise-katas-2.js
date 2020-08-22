const { getData } = require("./fakeApi");
/* 

DO NOT change the import or names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

You can look at the fakeApi to see how the data is returned

*/

// 1 Create a function that uses the getData function to make a request to the "food" URL and returns
// the data - expected return type String

const food = () => {};

// 2 Create a function that uses the getData function to make a request to the "cats" URL and returns
// a list of cats in alphabetical order - expected return type Array

const cat = () => {};

// 3 Create a function that uses the getData function to make a request to the "dogs" URL and returns
// the naughtiest dog - expected return type Object

const dog = () => {};

// 4 Create a function that uses the getData function to make requests to the "jokes" URL and returns
// a joke object with the key of question and answer - expected return type Object

const joke = () => {};

module.exports = {
    food,
    cat,
    dog,
    joke
}