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

## Create a custom Array.concat() method
1. Create a customConcat() method with the same functionality as Array.concat().
2. If the element passed to the customConcat() method is an array, concat each element of the array. (This basically flattens it by one degree). Array.concat() and Array.push() have been disabled.

Examples:
```
[123].customConcat("Hello")            // [123, "Hello"]
[1, 2, 3].customConcat([4, 5, 6])      // [1, 2, 3, 4, 5, 6]
[1, 2, 3].customConcat([[4, 5, 6], 7]) // [1, 2, 3, [4, 5, 6], 7]
[{ one: 1, two: 2, three: 3 }].customConcat({four: 4, five: 5, six: 6 }) // [{ one: 1, two: 2, three: 3 }, { four: 4, five: 5, six: 6 }]
```

Solutions:
```
Array.prototype.customConcat = function(element){
  if(Array.isArray(element)) {
    for (var i = 0; i < element.length; i++) {
      this.splice(this.length, 0, element[i])
    }
  } else {
    this.splice(this.length, 0, element)
  }

  return this;
}
```
```
Array.prototype.customConcat = function(v) {
  return Array.isArray(v)
         ? [ ...this, ...v ]
         : [ ...this, v ]
  ;
};
```

## Delete occurrences of an element if it occurs more than n times
codewars link: https://www.codewars.com/kata/554ca54ffa7d91b236000023/solutions/javascript/all/best_practice

Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

Example:
```
deleteNth ([1,1,1,1],2) // return [1,1]
deleteNth ([20,37,20,21],1) // return [20,37,21]
```

Solutions:
```
function deleteNth(arr,n){
  // ...
  var obj = {};
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] >= 1 ? obj[arr[i]] += 1 : 1;
    if(obj[arr[i]] <= n) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
```
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
```
