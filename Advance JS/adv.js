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
c = Math.floor(c)+1; // remove decimal0
if(c>70){
    alert("Your Love Score is "+c+"% you love each other like kanye loves kanye");// display number in perstange form
}
else if(c>30 && c<= 70){
    alert("Your Love Score is "+c+"%");// display number in perstange form
}
else{
    alert("Your Love Score is "+c+"% you love each other like oil and water");// display number in perstange form
}
/*
=== is equal(datatype is must) ==(doesnot check data type) to  !== is not eqaul to >= greater equal <=less and equal
*/


// leap year challenge
// on every that is divisivle by 4 except 100 unless the year is divisible 400
function isLeap(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                alert(year+" is a leap year");
            }
            else{
                alert(year+" is not a leap year");
            }
        }else{
            alert(year+" is a leap year");
        }
    }else{
        alert(year+" is not a leap year");
    }
}
isLeap(2004);
alert(year+" is a leap year");

//Array
var guestList = ["yahya","mohamed","ali","hussein","mohamud"];
var name1 = prompt("Enter your name?");
if(guestList.includes(name1)){ //Search if the name id in the list
    alert("welcome");
}else{
    alert("sorry, maybe next time.");
} 
// write a progrsm that print 1-100
//* 3 it print Fizz
//* 5 it print Buzz
//* 3 and *5 it print FizzBuzz

var outPut = [];
var count = 1;
function fizzBuzz(){
    while(count <= 100){ // loop 100 times
        if(count%3===0 && count%5===0){
            outPut.push("FizzBuzz");
        }
        else if(count%3===0){
            outPut.push("Fizz");
        }
        else if(count%5===0){
            outPut.push("Buzz");
        }
        else{
            outPut.push(count); // add count into outPut array
        }

        count++;
    } 
    console.log(outPut);
}
fizzBuzz();
//Who's Buying Lunch? COde Challenge
 
names = ["yahya","ali","mohamed","osman","muctasim"];
function whoPays(){
    var numberOfPeople = names.length;
    var randomPersomPosition = Math.floor(Math.random()*numberOfPeople); // 0 - 0.9999 ///0-4
    var randomPerson = names[randomPersomPosition];
    return randomPerson + " is going to buy lunch today!";
    }
whoPays();

// while loops
//while(something is true){
    //do something;
//}
var i = 1;
while(i<2){
    console.log(i);
    i++;
}

// 99 bottles of beer
var beer = 99;
var left = 98
function bearDrink(){
    while(beer >= 1){
        console.log(beer+" bottles of beer on the wall, "+beer+"  bottles of beer");
        console.log(" Take one down and pass it around, "+left+"  bottles of beer on the wall");
        beer--;
        left--;
    }
    console.log("0 bottles of beer on the wall, 0 bottles of beer");
    console.log(" nothing left");
}
bearDrink();//99 bottles of beer on the wall, 99  bottles of beer
            //Take one down and pass it around, 98  bottles of beer on the wall


//for loop
// for(var i = 0; i<2; i++){

//}
var outPut = [];

function fizzBuzz(){
    for(var count = 1; count<101; count++){ // loop 100 times
        if(count%3===0 && count%5===0){
            outPut.push("FizzBuzz");
        }
        else if(count%3===0){
            outPut.push("Fizz");
        }
        else if(count%5===0){
            outPut.push("Buzz");
        }
        else{
            outPut.push(count); // add count into outPut array
        }
    } 
    console.log(outPut);
}
fizzBuzz();

//challenge
// fibonacciGenerator
var first=0;
var second=1;
var sum=0;
var count=1;
function fibonacci(){
    while(count<=n){
        console.log(sum);
        count++;
        first=second;
        second=sum;
        sum= first+second;
    }
}
fibonacci(5);
//fibonacciGenerator array form

function fibonacci(n){
    var output = [];
    if (n===1){
        output = [0]; // [0]
    }
    else if (n===2){
        output = [0,1]; // [0,1]
    }
    else{
        output = [0,1];
        for (var i = 2; i < n; i++){
            output.push(output[output.length - 2] + output[output.length - 1]); // [0,1,1]
        }
    
    }
    return output;
}

output = fibonacci(10);
console.log(output);

// Display current day and time 
var today = new Date();
  var day = today.getDay(); // curent day
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + "."); // day
  var hour = today.getHours(); // hour
  var minute = today.getMinutes();
  var second = today.getSeconds(); // min
  var prepand = (hour >= 12)? " PM ":" AM "; //h >  is PM else AM
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

//Write a JavaScript program to print date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
today = dd+'/'+mm+'/'+yyyy;
console.log(today);