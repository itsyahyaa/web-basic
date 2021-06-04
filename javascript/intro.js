// number
2 + 3
//string 
"yahya"
//alert
alert("yahya")
// variable
var myName = "yahya";
var yourName = prompt("What is your name?");
alert("my name is "+myName + ",Welcome to my course" + yourName + "!");

var gamelevel = 1;
gamelevel = 2;
gamelevel = 3;
alert("your gamelevel is:"+ gamelevel); //it will alert your gamelevel is 3

//exercise swap two number
var a = "3";
var b = "8";

var temp = a;
a = b;
b = temp;
console.log('a is '+ a); // a = 8
console.log('a is '+ b); // b = 3

// name your variables understanble name 
// dont name ur variable like var number character dont space the name (my_name,  my name is not allowed)

//name spacing
var message = "Hello";
var name = "yahya";
alert(message + " there, " + name);

//length
var name1 = "yahya";
name1.length;

// calculate the characters written 

var num = "280";
var num1 = prompt("Enter summary of ur project?");
var num2 = num1.length;
alert("you have written "+ num2 + " characters, you have " + (140-num2) + " charcters left");

//slicing slicing(x,y)    bread.slice(x,y)

var nam1 = "yahya";
nam1.slice(0,1); //y
alert(prompt("Compose your tweet:").slice(0,140));


// .toUppercase

var name = "yahya";
name.toUpoercase;

//captilize first letter

var yNam = prompt("What is your name?");
var firstChar = yNam.slice(0,1);
var firstUpperCase = firstChar.toUpperCase();// change rest of letters to upper case
var restOfChar = yNam.slice(1,5);
restOfChar = restOfChar.toLowerCase(); // change rest of letters to lower case
var captalizeName = firstUpperCase+restOfChar
alert(captalizeName);


// basic arithmetic
// modules % 
var cost = 10 % 2 // 5
//Age of dog
var age = prompt("Age of dog?");
humangAge = (age-2)*4 + 21;
alert("Your dog is "+ humangAge + " years old in human years");

// increment and decrement 
var x =5;
x = x + 1; //6   
x +=2; //7
console.log(x);

var y =5;
y = y - 1; //4
console.log(y);

// function
function getmilk(){
    alert("hello kenya");
    console.log("Hello somalia");     
}
getmilk();

// remove decimal
Math.floor(1.6) // 1 
 
// life in aweek Solution
// take your current age as the input and console.log message with our time left in this format
// inform of X days Y weeks Z month left
function lifeInWeeks(age) {
    var yearRemaing = 90-age; //45
    var days = yearRemaing*365; //16425
    var weeks = yearRemaing*52; //2340
    var months = yearRemaing*12; //540

    console.log("you have "+days+" days "+weeks+" weeks "+months+" month left")
}
lifeInWeeks(45)// you have 16425 days 2340 weekks 540 month left

// return as output 
function getMilk(money){
    return money % 1.5; // output
}
getMilk(200); // 0.5

// BMI = weight / height*height
function bmiCal(weight,height){
    var bmi = weight/Math.pow(height,2); //height*height
    return bmi;
}

var bmi = bmiCal(65,1.8);
console.log(Math.round(bmi));// round is to roundoff number to the nearest whole number