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
