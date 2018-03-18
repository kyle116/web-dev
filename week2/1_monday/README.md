# Monday

## DOM Manipulation
Read this: https://www.w3schools.com/js/js_htmldom.asp

Did you understand? No, ok its just basically all the HTML on the web page in a simple sense. What we will be doing is learning how to manipulate the DOM with JavaScript. You might have had some exposure in using JavaScript to affect your HTML and CSS in the previous tutorials but here is a more in depth understanding.

## Target, Event Listener, Event, Callback function
These are the steps on affecting the DOM. First you would target the HTML DOM element. Once you target the element, you want to give it something to listen for. Then when the event is heard, the function will fire off and be executed. We will follow along with the example.js file in this folder. This line in example.js has target, event listener, event, and callback:
```
document.getElementById("myBtn").addEventListener("click", myFunction);
```

**Target:**
`document.getElementById("myBtn")` targets the HTML element in the document with the id of "myBtn".

**Event Listener and Event:**
`.addEventListener("click"` the method addEventListener is listening for the event of "click". Other common events are:
load, click, mouseover, mouseout, hover, keydown, submit

**Callback function:**
Callback functions are just functions that are done after whatever was previously supposed to happen is completed. So in the example, once the element is targeted and the addEventListener has been completed.
`, myFunction);` This is what is performed when there is a click event on the element. In example.js file, as you can see, `myFunction` is defined as:
```
function myFunction() {
    alert ("Hello World!");
}
```
So this function alerts the user with "Hello World!" when the element is clicked.
