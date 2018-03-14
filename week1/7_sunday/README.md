## Sunday

### Finish Code Academy's JavaScript course
* Code Academy JavaScript: [https://www.codecademy.com/learn/introduction-to-javascript](https://www.codecademy.com/learn/introduction-to-javascript)


### JavaScript Code Challenges
Now that you have gotten some JavaScript experience, time to put it to the test. The following are challenges to complete. If the instructions are a bit hard to understand, they were meant to be that way! Not every thing in programming will be straight forward and be easy to understand.

Feel free to use an online JavaScript console such as:
* [Repl.it](https://repl.it/)
* [CodePen](https://codepen.io/)

Or use the Google Chrome's built JavaScript console by typing in `about:blank` in your URL bar. It is important to go on this page because other web pages may have interfering JavaScript that may affect the outcome of your code. Bring up the console by pressing `Command + Option + j` or `F12` key.

For each challenge, console.log the result.

#### Tips:
You can probably find the solution online but its important you're not copying pasting questions into google to find the answer. In the real world, you won't have a question nicely written up for you to google. Try to google the bit that you are stuck on.

##### Example:

##### Extract the first half of a string of even length
Write a function to extract the first half of a string of even length. Return an error message if not even.

You know how to start it by writing a function with an argument
```
function halfString(str) {

}
```

The question asks to get half the string but IF its even of length. Maybe you don't know how to do this so lets google. You might search something like "if string is even javascript". Its important to put the language after your question or you might find an answer in a different language and the syntax won't match up.

Your google result didn't give you exactly what you wanted. But you did find a question about determining a number if its [even or odd](https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even).

The answer displays:
```
function isEven(n) {
   return n % 2 == 0;
}
```

You're not determining whether if a number is even or not but you do know how to find the `length` of a string! `str.length`
```
function halfString(str) {
  if (str.length % 2 == 0) {

  }
}
```

Now that we are checking if the string is even or not, now we need to `return` the first half of the even string. If you dont know how to cut the string in half? Lets google it, we can google something like "cut string in half JavaScript". The second link brings up w3schools link to the JavaScript method `.slice()`. This looks exactly like what we are looking for. We need the beginning of the string, easy its 0. Then the half way point of the string. Well we just got the length of the string previously so all we need to divide by 2 to get the halfway point.

Lets also return an error message if the string isn't even.
```
function halfString(str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return "Error! String entered is odd."
}
```
------
### Challenges

#### Convert Celsius to Fahrenheit
Write a program that prompts a user input and reads a Celsius degree, then converts it to Fahrenheit and displays the result. The formula for the conversion is as follows:

`fahrenheit = (9 / 5) * celsius + 32`

#### Which January starts on a Sunday between a range of years
Write a program to find which January begins on a Sunday between 2014 and 2050.

**Expected Output:**
```
January starts on Sunday in year:  2017
January starts on Sunday in year:  2023
January starts on Sunday in year:  2034
January starts on Sunday in year:  2040
January starts on Sunday in year:  2045
```

#### Add 2 integers
Write a function called add that takes 2 numbers as arguments and returns the sum.

**Code:**
```
console.log(add(1, 2));
console.log(add(5, 3));
```

**Expected Output:**
```
3
8
```

### Even or Odd
Write a function that takes in a number as an argument and displays if it is even or odd

**Code:**
```
console.log(evenOdd(1));
console.log(evenOdd(4));
```

**Expected Output:**
```
1 is odd
4 is even
```

#### 2 integers: Positive or Negative
Write a function called positiveNegative to check from two given integers, if one is positive and one is negative.

**Code:**
```
console.log(positiveNegative(2, 2));
console.log(positiveNegative(-2, 2));
console.log(positiveNegative(2, -2));
console.log(positiveNegative(-2, -2));
```

**Expected Output:**
```
false
true
true
false
```

#### Begins with "X"?
Write a function to create a new string adding "X" in front of a given string. If the given string begins with "X" or "x" then return the original string.

**Code:**
```
console.log(checkX("Xxxtentacion"));
console.log(checkX("xray"));
console.log(checkX("Malcom"));
```

**Expected Output:**
```
Xxxtentacion
xray
XMalcom
```

#### How many days in the month
Write a function that takes in 2 arguments, first one being the number of the month (1: January, 2: February...etc.) and second one the 4 digit year. Display how many days are in that month of the specified year. Remember to account for leap years in February.

**Code:**
```
console.log(daysInMonth(1, 2012));
console.log(daysInMonth(2, 2012));
console.log(daysInMonth(2, 2014));
```

**Expected Output:**
```
January 2012 had 31 days
February 2012 had 29 days
February 2013 had 28 days
```

#### Array to Object
Write a function called arrayToObj that takes an array that has an even number of elements (all elements are strings) and converts each adjacent element into a key-value pair property on an object. Assume an even amount of items in the array.

**Code:**
```
console.log(arrayToObj(["a", "cat", "b", "dog"]))
```

**Expected Output:**
```
{a: "cat", b: "dog"}
```

#### Largest of 3 integers
Write a function that takes 3 numbers as arguments and returns the largest of the 3

**Code**
```
console.log(largestOf3(1,0,1));
console.log(largestOf3(0,-10,-20));
console.log(largestOf3(1000,510,440));
```

**Expected Output:**
```
1
0
1000
```

#### Reverse String
https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-48.php

#### Find the kth greatest element of a given array of integers
https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-90.php

#### Find the number which appears most in a given array of integers
https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-94.php
