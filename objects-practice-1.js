
// Objects Practice 1: Accessing Properties

// Below are exercises in accessing the properties of Javascript Objects. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Consider this variable:
var person = { fName: "Arthur", lastName: "Dent" }
// Write the code that uses dot notation to access the first name of the person object.

// Exercise 2
// Write the code that uses dot notation to access the last name of the person object.

// Exercise 3
// Write the code that uses bracket notation to access the first name of the person object.

// Exercise 4
// Write the code that uses bracket notation to access the last name of the persion object.

// Exercise 5
// Update the person object to have a method called fullName that returns the first and last name of the person object in one string. Call the method below.

// Exercise 6
// Consider this variable.
var lunch = { name: "PB and Banana", type: "sandwich", ingredients: ["bread", "peanut butter", "banana"] }
// Write the code that accesses the ingredients property of the lunch object. Provide the answer in dot and bracket notation.
// console.log(lunch.type);
// Exercise 7
// Write the code that accesses the first item in the ingredients property of the lunch object. Provide the answer in dot and bracket notation.

// Exercise 8
// Write the code that accesses the second item in the ingredients property of the lunch object. Provide the answer in dot and bracket notation.

// Exercise 9
// Write a function that takes an object like the one above and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.printRecipe = (lunch) => console.log(`The ingredients for a PB and banana sandwich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`);
lunch.printRecipe(lunch);
console.log(lunch.printRecipe);
console.log(lunch);

// Exercise 10
// Add a method to the object that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
