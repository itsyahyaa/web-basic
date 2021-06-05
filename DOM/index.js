// alert("hello");
//document.querySelector("h1").innerHTML = "GOod bye"
var heading = document.firstElementChild.lastElementChild.firstElementChild; // select H1
heading.innerHTML = "Good bye";
heading.style.color = "red";

document.querySelector("input").click();

//selecting last li
document.getElementsByTagName("li")[2].style.color = "green";
document.getElementsByClassName("btn")[0].style.color = "red";
