# Monday

## DOM Manipulation
Read this: https://www.w3schools.com/js/js_htmldom.asp

Did you understand? No, ok its just basically all the HTML on the web page in a simple sense. What we will be doing is learning how to manipulate the DOM with JavaScript. You might have had some exposure in using JavaScript to affect your HTML and CSS in the previous tutorials but here is a more in depth understanding.

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
  
  