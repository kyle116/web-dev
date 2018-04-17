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

## Simple Pig Latin
codewars link: https://www.codewars.com/kata/simple-pig-latin/javascript

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !
```
