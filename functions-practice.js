
// Functions Practice 1

// Below are exercises in writing functions. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Write a function called marco that logs "polo" to the screen.
// var nameWriter = () => {console.log("polo");}
// nameWriter();

// Exercise 2
// Write a function called greeter that takes a name as an argument and logs a greeting with that name to the screen.
// var greeter = (name) => {console.log(`Hello, ${name}!`);}
// greeter("Andrew");

// Exercise 3
// Write a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.
// var oddOrEven = (num) => {if(num%2==0){console.log("even")}else{console.log("odd")}};
// oddOrEven(1);

// Exercise 4
// Write a function called triple that takes an number as an argument and logs the result of that number multiplied by 3.
// var triple = function(num){
//   console.log(num*3);
// }(5);

// Exercise 5
// Write a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// var multiply = function(a,b){console.log(a*b);}(2,5);

// Exercise 6
// Write a function called divisibleBy that takes two numbers as arguments and logs whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// var divisibleBy = function(x,y){
//   if(x%y==0){
//     console.log(`${x} is evenly divisible by ${y}`);
//   }else{
//     console.log("Those numbers don't jive, yo!");
//   }
// }(44,2)

// Exercise 7
// Consider this variable:
// var product = { name: "fart", price: "the low, low price of $19.95!" }
// // Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
// var describeProduct = (item) => {console.log(`The prooduct is a ${item.name}. It costs ${item.price}.`);}
//
// describeProduct(product);

// Exercise 8
// Consider this function:
function message(product,inBudget){
  if(inBudget) {
    return `${product.name} is within budget`;
  } else {
    return `${product.name} is beyond budget`;
  }
}
// And consider this variable:
var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00
// Write a function checkBudget that takes a product, budget and the message function as arguments, determines whether the product is within budget and returns the result of the message function.
// function checkBudget(prod,budg,msg){
//   if(prod.price<=budg){
//     console.log(msg(true));
//   }else{
//     console.log(msg(false));
//   }
// }
//
// checkBudget(product,budget,message);

// Exercise 9
// Refactor the previous exercise to replace "Product" in the return to the name of the product.
// For example, checkBudget(product, budget, message) ----> "OledMonitor is beyond budget"
// function checkBudget(prod,budg,msg){
//   if(prod.price<=budg){
//     console.log(msg(prod,true));
//   }else{
//     console.log(msg(prod,false));
//   }
// }

checkBudget(product,budget,message);
