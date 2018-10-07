
// Callbacks Practice

// Consider this variable:
var sites = ["codepen.io", "codecademy.com", "coursera.org", "egghead.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]

// ----------------------------------------- First, lets start with some normal functions

// Exercise 1
// Declare a named function called dotCom that takes in one string as an argument and determines if that string contains ".com" (Should return either true or false). Test the function by looping over the sites array, and call your dotCom function on each item.
function isDotCom(siteName){
  if(siteName.includes(".com")){
    return true;
  }else{
    return false;
  }
}
// for(let i=0;i<sites.length;i++){
//   console.log(`Name: ${sites[i]} - ${isDotCom(sites[i])}`);
// }

// Exercise 2
// Declare a named function called dotIo that takes in one string as an argument and determines if that string contains ".io". Test the function by looping over the sites array, and call your dotCom function on each item.
function isDotIO(siteName){
  if(siteName.includes(".io")){
    return true;
  }else{
    return false;
  }
}
// for(let i=0;i<sites.length;i++){
//   console.log(`Name: ${sites[i]} - ${isDotIO(sites[i])}`);
// }

// Exercise 3
// Write a function called dotOrg that determines if a string contains .org. Notice how similar it is to Exercise 1 & 2? Not very DRY, but that's ok for now.
function isDotOrg(siteName){
  if(siteName.includes(".org")){
    return true;
  }else{
    return false;
  }
}
// for(let i=0;i<sites.length;i++){
//   console.log(`Name: ${sites[i]} - ${isDotOrg(sites[i])}`);
// }

// Exercise 4
// Time to refactor. Create a HIGHER ORDER FUNCTION called loopOver that takes in two arguments, an array and a function. Your function should loop over each item in the array and call the function on each item.
function loopOver(array,func){
  for(let i=0;i<sites.length;i++){
    console.log(`Name: ${array[i]} - ${func(array[i])}`);
  }
}

// Exercise 5
// Call your loopOver function to find all ".com" websites in the sites array.

// Exercise 6
// Call your loopOver function to find all ".io" websites in the sites array.

// Exercise 9
// Call your loopOver function to find all ".org" websites in the sites array.
// loopOver(sites,isDotCom);

// Exercise 10
// Now, instead of your home made loopOver function, use an array method that takes your dotCom function as a callback and returns the ".com" sites from the array.
function getDotComs(array){
  var newArray = [];
  for(let i=0;i<array.length;i++){
    if(array[i].includes(".org")){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// console.log(getDotComs(sites));
