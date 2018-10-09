
// Map vs. For Loop Practice

// Below are exercises to get you seeing the differences between using a map and a for loop. Beneath each prompt write the code to fulfill the exercise requirement.


// Exercise 1
// Consider this variable:
var nums = [1, 2, 3, 4, 5]
// Write a for loop that saves the result of each number multiplied by 5 to another array.
// var newNums = [];
// for(let i=0;i<nums.length;i++){
//   newNums.push(nums[i]*5);
// }
// console.log(newNums);

// Exercise 2
// Use a map on the nums array that saves the result of each number multiplied by 5 to another array.
// let timesFive = nums.map((val,i,timesFive) => {
//   return val *5;
// })
// console.log(timesFive);

// Exercise 3
// Consider this variable:
var numbers = [11, 22, 33, 44, 55, 66]
// Write a for loop that saves all numbers in the numbers array that are evenly divisible by 3 into another array.
// var divThree = [];
// for(let i=0;i<numbers.length;i++){
//   if(numbers[i]%3==0){
//       divThree.push(numbers[i]);
//   }
// }
// console.log(divThree);
// Exercise 4
// Use map on the numbers array to save any numbers from the array that are evenly divisible by 3 into another array.
// console.log(numbers.filter(function(numbers){
//   return numbers%3===0;
// }))
//
// console.log(numbers.filter((numbers) => numbers%3===0));


// Exercise 5
// Consider this variable:
var toons = [{name: "Tom", animal: "cat"}, {name: "Jerry", animal: "mouse"}, {name: "Bugs", animal: "rabbit"}, {name: "Daffy", animal: "duck"}, {name: "Felix", animal: "cat"}, {name: "Oswald", animal: "rabbit"}]
// Write a for loop that saves all cat characters to another array.
// console.log(toons.filter(function(toons) {return toons.animal==="cat"}));
// console.log(toons.filter(toons => toons.animal==="cat"));

// Exercise 6
// Use map on the toons array to save all rabbit characters to another array.
// console.log(toons.filter(toons => toons.animal==="rabbit"));

// Exercise 7
// Write a for loop to save the names of each character to another array.
// var characters = [];
// toons.forEach(function(element){
//   characters.push(element.name);
// })
//
// console.log(characters);

// Exercise 8
// Use map on the toons array to save a description of each character to another array.
// console.log(toons.map(toons => toons.description = `${toons.name} the ${toons.animal}`));

// Exercise 9
// Consider this variable:
var people = [{firstName: "Alan", lastName: "Grant"}, {firstName: "Ellie", lastName: "Sattler"}, {firstName: "Ian", lastName: "Malcolm"}]
// Write a for loop that creates a new object for every person that has a key value for firstName, lastName, and fullName and saves each new object into another array.
// for(let i=0; i<people.length;i++){
//   people[i].fullName = `${people[i].firstName} ${people[i].lastName}`;
// }

// Exercise 10
// Refactor the above code to use a map on the people array to achieve the same result.
// console.log(people.map(people => people.fullName = `${people.firstName} ${people.lastName}`));

// Exercise 11
// Consider this function:
function addTitle(person){
  return "Dr. " + person.firstName + " " + person.lastName
}
// Write a for loop that iterates through each person in the people array and stores the result of addTitle on each element to another array.
// var drs = [];
// for(let i=0;i<people.length;i++){
//   drs.push(addTitle(people[i]));
// }
// console.log(drs);

// Exercise 12
// Use map on the run addTitle on each element in the people array and store the result of each call into another array.
// console.log(people.map(people => addTitle(people)));
