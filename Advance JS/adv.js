// generating random number between 0 - 0.9999999999999999
// arrange for dice
var x = Math.random();
n = x * 6; // multiply upto the range of number you want 
n = Math.floor(n)+1;
console.log(n); // 1 to 6 

// Love calculator for two person 
a = prompt("Enter first person's name?"); // first name
b = prompt("Enter second person's name?"); // last name 
var c = Math.random()*100; // generate random number
c = Math.floor(c)+1; // remove decimal
alert("Your Love Score is "+c+"%");// display number in perstange form