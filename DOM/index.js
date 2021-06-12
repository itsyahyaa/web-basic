//alert("hello");
//document.querySelector("h1").innerHTML = "GOod bye"
var heading = document.firstElementChild.lastElementChild.firstElementChild; // select H1
heading.innerHTML = "Good bye";
heading.style.color = "red";

document.querySelector("input").click();

//selecting last li
document.getElementsByTagName("li")[2].style.color = "green";
document.getElementsByClassName("btn")[0].style.color = "black";

document.getElementById("title").style.fontSize="30px";
 //querey selector is easiest you can put id or class
// id = # and class = .
// li a can also work
document.querySelector("h1").innerHTML = "GOod byepoijhgcfx";
document.querySelector("#list a").style.color = "red";

document.querySelectorAll("#list .list")[2].style.color = "purple"; 


// background color red
document.getElementsByClassName("btn")[0].style.backgroundColor = "red";
// add class to the html
document.querySelector(".btn").classList.add("btn1");
// chamging attribute
document.querySelector("a").setAttribute("href", "google.com");
