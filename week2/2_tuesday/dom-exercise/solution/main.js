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

// Exercise 4 - Click the box to generate a new random number(between 1-100) inside the box
document.getElementById("box-4").addEventListener("click", function() {
  document.getElementById("box-4").innerHTML = Math.floor((Math.random() * 100) + 1);
})
// Exercise 5 - Click on the box to generate a new identical box(Same height, same width, same border). You should not type in the css file at all
document.getElementById("box-5").addEventListener("click", function() {
  var newDiv = document.createElement("div");
  newDiv.className = "box";
  document.getElementById("number-5").insertBefore(newDiv, document.getElementById("number-5").children[2]);
})
// Exercise 6 - By clicking any of the boxes, change the first box color to Yellow, the second to Purple, the third to Blue

// Exercise 7
document.getElementById("answer-7").innerHTML = document.title;
// Exercise 8
// Exercise 9
// Exercise 10
