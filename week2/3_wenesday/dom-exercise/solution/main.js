// Rememmber to link the jQuery library to the HTML Document

// Exercise 1 - Click the box to change it to the color blue
// document.getElementById("box-1").addEventListener("click", function() {
//   document.getElementById("box-1").style.backgroundColor = "blue";
// })
$("#box-1").click(function() {
  $("#box-1").css("background-color", "blue");
});

// Exercise 2 - Move your mouse over the box to change it to the color red
// document.getElementById("box-2").addEventListener("mouseover", function() {
//   document.getElementById("box-2").style.backgroundColor = "red";
// })
$("#box-2").mouseover(function() {
  $("#box-2").css("background-color", "red");
});

// Exercise 3 - Click each li to toggle it between Black color font and Red color font
// var liArr = document.getElementsByTagName("li");
// for (i = 0; i < liArr.length; i++) {
//   liArr[i].addEventListener("click", function(e) {
//     e.target.style.color = (e.target.style.color === "black" ? "red" : "black");
//   })
// }
var liArr = $("li");
for (i = 0; i < liArr.length; i++) {
  $(liArr[i]).click(function(e) {
    e.target.style.color = (e.target.style.color === "red" ? "black" : "red");
  })
}

// Exercise 4 - Click the box to generate a new random number(between 1-100) inside the box
// document.getElementById("box-4").addEventListener("click", function() {
//   document.getElementById("box-4").innerHTML = Math.floor((Math.random() * 100) + 1);
// })
$("#box-4").click(function() {
  $("#box-4").html(Math.floor((Math.random() * 100) + 1));
});

// Exercise 5 - Click on the box to generate a new identical box(Same height, same width, same border). You should not type in the css file at all
// document.getElementById("box-5").addEventListener("click", function() {
//   var newDiv = document.createElement("div");
//   newDiv.className = "box";
//   document.getElementById("number-5").insertBefore(newDiv, document.getElementById("number-5").children[2]);
// })
$("#box-5").click(function() {
  $("#number-5 > span:nth-child(3)").prepend("<div class='box'></div>");
});

// Exercise 6 - By clicking any of the boxes, change the first box color to Yellow, the second to Purple, the third to Blue
// document.querySelectorAll(".box-6").forEach(function(elem, index) {
//   elem.addEventListener("click", function() {
//     document.getElementsByClassName("box-6")[0].style.backgroundColor = "yellow";
//     document.getElementsByClassName("box-6")[1].style.backgroundColor = "purple";
//     document.getElementsByClassName("box-6")[2].style.backgroundColor = "blue";
//   })
// })
$(".box-6").each(function(index, elem) {
  $(elem).click(function() {
    $(".box-6:nth-child(2)").css("background-color", "yellow");
    $(".box-6:nth-child(3)").css("background-color", "purple");
    $(".box-6:nth-child(4)").css("background-color", "blue");
  });
});

// Exercise 7 - Display the title of this HTML Document here:
// document.getElementById("answer-7").innerHTML = document.title;
$("#answer-7").html(document.title);

// Exercise 8 - Click on the box to display an image in the img tag above this. Remove the image if you click the box again
document.getElementById("box-8").addEventListener("click", function() {
  document.getElementsByTagName("img")[0].src = (document.getElementsByTagName("img")[0].src ? "https://at-cdn-s01.audiotool.com/2015/12/17/documents/TqIm14MAHKQxPfUlAZ0FM8sApH7f/0/cover256x256-b4c0e9d7e44047e883bc326e609eb50f.jpg" : "");
})

// Exercise 9 - For each key typed in the input field, give the same output to the output box
document.getElementsByTagName("input")[0].addEventListener("keypress", function() {
  document.getElementById("output-9").innerHTML = document.getElementsByTagName("input")[0].value;
})
// Exercise 10 - Click on the box to begin the countdown
document.getElementById("box-10").addEventListener("click", function() {
  document.getElementById("box-10").innerHTML = parseInt(document.getElementById("box-10").innerHTML) - 1;
})
