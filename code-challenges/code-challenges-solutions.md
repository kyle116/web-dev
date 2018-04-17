# Code Challenges

## Largest Difference in Increasing Indexes
codewars link: https://www.codewars.com/kata/52503c77e5b972f21600000e
Summary: Write a function which takes an array data of numbers and returns the largest difference in indexes `j - i` such that `data[i] <= data[j]`

Long Description:

The `largestDifference` takes an array of numbers. That array is not sorted. Do not sort it or change the order of the elements in any way, or their values.

Consider all of the pairs of numbers in the array where the first one is less than or equal to the second one.

From these, find a pair where their positions in the array are farthest apart.

Return the difference between the indexes of the two array elements in this pair.

Example:
```
largestDifference([1,2,3]) ; // returns 2, because here j = 2 and i = 0 and 2 - 0 = 2
```

Solution:
```
var largestDifference = function(data) {
  var diff = 0;
  for (var i = 0; i < data.length; i++) {
    for (var j = 1; j < data.length; j++) {
      if(data[i] <= data[j]) {
        if(j - i > diff) {
          diff = j - i;
        }
      }
    }
  }
  return diff;
};
```

## Not very secure
codewars link: https://www.codewars.com/kata/not-very-secure/train/javascript
In this example you have to validate if a user input string is alphanumeric. The given string is not `null`, so you don't have to check that.

The string has the following conditions to be alphanumeric:
* At least one character (`""` is not valid)
* Allowed characters are uppercase / lowercase latin letters and digits from `0` to `9`
* No whitespaces/underscore

Examples:
```
alphanumeric("Mazinkaiser") // Output: true
alphanumeric("hello world_") // Output: false
alphanumeric("PassW0rd") // Output: true
alphanumeric("     ") // Output: false
```

Solutions:
```
function alphanumeric(string){
  var arr = string.split("");
  var result = false;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].charCodeAt(0) >= 48 && arr[i].charCodeAt(0) <= 57) {
      result = true;
    } else if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
      result = true;
    } else if(arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
}
```
```
let alphanumeric = s => /^[a-z\d]+$/i.test(s);
```
```
function alphanumeric(string){
  return /^[0-9a-z]+$/i.test(string);
}
```

## Simple Pig Latin
codewars link: https://www.codewars.com/kata/simple-pig-latin/javascript

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !
```

Solutions:
```
function pigIt(str){
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] += arr[i][0] + "ay";
    arr[i] = arr[i].substring(1, arr[i].length)
  }
  return arr.join(" ");
}
```
```
function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}
```
```
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
```
