// Exercise 1 - Click the box to change it to the color blue
document.getElementById("box-1").addEventListener("click", function() {
  document.getElementById("box-1").style.backgroundColor = "blue";
})
// Exercise 2 - Move your mouse over the box to change it to the color red
document.getElementById("box-2").addEventListener("mouseover", function() {
  document.getElementById("box-2").style.backgroundColor = "red";
})
// Exercise 3 - Click each li to toggle it between Black color font and Red color font
var liArr = document.getElementsByTagName("li");
for (i = 0; i < liArr.length; i++) {
  liArr[i].addEventListener("click", function(e) {
    e.target.style.color = (e.target.style.color === "black" ? "red" : "black");
  })
}

// Exercise 4
// Exercise 5
// Exercise 6
// Exercise 7
document.getElementById("answer-7").innerHTML = document.title;
// Exercise 8
// Exercise 9
// Exercise 10
