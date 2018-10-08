
// Loops/Iteration Practice

// Below are exercises in using loops and iteration. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Write a for loop that logs each number from 1 - 20.
// for(let i=1;i<21;i++){
//   console.log(i);
// }

// Exercise 2
// Write a for loop that logs the result of each number from 1 - 20 tripled.
// for(let i=1;i<21;i++){
//   console.log(i*3);
// }

// Exercise 3
// Consider this variable:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Write for loop that logs each number.
// numbers.forEach(function(element){
//   console.log(element);
// })

// Exercise 4
// Create a for loop that logs each EVEN number from 1-20, and in the place of every odd number, returns the word "ODD"
// So the result should be: [ODD, 2, ODD, 4, ODD, 6 ....]
// var myArr = [];
// for(let i=1;i<21;i++){
//   if(i%2==0){
//     myArr.push(i);
//   }else{
//     myArr.push("ODD")
//   }
// }
// console.log(myArr);

// Exercise 5
// Your friend is training for a marathon and you are going to help them. They are running on a track, but often lose count of how many loops they have done. You need to create a for loop to log their progress as they run. Create the code to satisify the pseudo code below

// Initial number of laps is 0
// Track size: 1/4 mile
// Goal: Run 8 miles

// for(....create the loop condition ....) {
      // log laps until your friend has run their 8 miles
// }

// // EXTRA: For extra challenge, add code that logs an encouraging message to your friend at the 4, 6, and 7 mile markers
// var trackSize = .25;
// var goal = 8;
// var totalLaps = goal/trackSize;
// for(let lap=0,mi=-1;lap<=totalLaps;lap++){
//   console.log(`Lap ${lap}!`);
//   if(lap%4==0){
//     mi++;
//     console.log(`\tMile ${mi}!`)
//   }
//   if(lap==16 || lap==24 || lap==28){
//     console.log(`Keep going! Only ${8-mi} mile(s) to go!`);
//   }
// }

// Exercise 6
// Use a forEach on the numbers variable above to log each number.


// Exercise 7
// Use a forEach on the numbers variable above to log the result of each number doubled.

// Exercise 8
// Use a for loop to log each number from the numbers variable above.

// Exercise 9
// Use a for loop to log whether each number from the numbers variable above is odd or even.

// Exercise 10
// Use a forEach on the numbers variable above to log whether each number is odd or even.
var nums= [1,4,3,2,5,6,3,4];
//
// nums.forEach(function(element){
//   if(element%2==0){
//     console.log(`${element} is even`);
//   }else{
//     console.log(`${element} is odd`);
//   }
//
// })

// Exercise 11
// Use for loop to log each number from the numbers variable above in reverse.

// Exercise 12
// Use a forEach on the numbers variable above to log each number in reverse. Hint: Another javascript array method might be necessary.
var newArray = nums.reverse();
newArray.forEach(function(element){
  console.log(element);
})
