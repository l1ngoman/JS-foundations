
// Loops/Iteration Practice 2: while/do while

// Below are exercises to get you practicing with while and for in loops. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Write a while loop that logs each number from 0 to 10.

// Exercise 2
// Write a while loop that logs each number from 10 to 0.

// Exercise 3
// Write a do while loop that logs each number from 0 to 10

// Exercise 4
// Write a do while loop that logs each number from 10 to 0.

// Exercise 5
// Write a function that takes a number as an argument and uses a while loop to count up to that number from 0.

// Exercise 6
// Write a function that takes a number as an argument and uses a do while loop to count up to that number from 0.

// Exercise 7
// Write a function that uses while loop to prompt a user for an even number until their entry is even.
do{
  var sent = false;
  var ans = prompt("Enter an even number")
  if(ans%2==1){
    alert("That's not even!!! You're a dick!");
    sent = true;
  }else {
    alert("You did it (finally!...). You entered: "+ans);
    sent=false;
  }
}while(sent);


// Exercise 8
// Write a function that uses a do while loop to prompt a user for an odd number until their entry isodd.

// Exercise 9
// Write a function that uses a while loop to prompt a user for their hobbies until it has a list of 3 different hobbies. Use an alert or a confirm to show the user all the hobbies they entered.


// Exercise 10
// Write a function that uses a do a while loop to prompt a user for their hobbies until it has a has a list of 3 different hobbies. Use an alert or a confirm to show the user all the hobbies they entered.
