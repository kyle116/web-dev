# Monday

## DOM Manipulation
Read this: https://www.w3schools.com/js/js_htmldom.asp

Did you understand? No, ok its just basically all the HTML on the web page in a simple sense. What we will be doing is learning how to manipulate the DOM with JavaScript. You might have had some exposure in using JavaScript to affect your HTML and CSS in the previous tutorials but here is a more in depth understanding.

<<<<<<< HEAD
### Events
An Event is when something on the page happens. For example, when you click a button on a webpage, that would be a click event. Some common events are:
* load
* click
* mouseover
* mouseout
* hover
* keydown
* submit

These are things that you want to listen for. Thats what we have event listeners for. 

### Event Listeners
Read this: https://www.w3schools.com/js/js_htmldom_eventlistener.asp

Once you know how to add and event listener to the HTML DOM Element, you want it to do something typically. For example if you click on a box in a Tic Tac Toe game, you would expect it to be populated with an "X" or "O". We can do this with `addEventListener()`
```
document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = Date();
});
```

In this example, you are selecting the HTML DOM Element with the id of "myBtn" in the document with `document.getElementById("myBtn")`. Next adding the event listener to listen for the "click" event. The part after is what you want to do. The `function() {}` part. This is a call back function. The call back is just what you want to do after every thing is completed. So in this case it will add the `Date()` to another element with the id of `demo`.
  
  
=======
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
>>>>>>> 71b6b267a51ecf174b5310dbe00d76ae6c619605
