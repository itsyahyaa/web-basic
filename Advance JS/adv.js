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
while(something is true){
    //do something;
}
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