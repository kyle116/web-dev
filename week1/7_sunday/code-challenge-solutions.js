// Convert Celsius to Fahrenheit
var celsius = prompt('Enter Temp in Celsius');
var fahrenheit = (9 / 5) * celsius + 32;
console.log(fahrenheit);

// Which January starts on a Sunday between a range of years
for(var year = 2014; year <= 2050; year++) {
  var d = new Date(year, 0, 1);
  if ( d.getDay() === 0 ) {
    console.log("January starts on Sunday in year: " + year);
  }
}

// Add 2 integers
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 2));
console.log(add(5, 3));

// Even or Odd
function evenOdd(num) {
  if(num % 2 == 0) {
    return num + " is even";
  } else {
    return num + " is odd";
  }
}
console.log(evenOdd(1));
console.log(evenOdd(4));

// 2 integers: Positive or Negative
function positiveNegative(x, y) {
  if ((x < 0 && y > 0) || x > 0 && y < 0) {
    return true;
  } else {
    return false;
  }
}
console.log(positiveNegative(2, 2));
console.log(positiveNegative(-2, 2));
console.log(positiveNegative(2, -2));
console.log(positiveNegative(-2, -2));

// Begins with "X"?
function checkX(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'X') {
    return str1;
  }
  return "X" + str1;
}
console.log(checkX("Python"));
console.log(checkX("thon"));

// How many days in the month
function daysInMonth(month, year) {
  var isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
  switch (month) {
    case 1: return ("January " + year + " had 31 days");
            break;
    case 2: return ("February " + year + " had" + (isLeapYear ? " 29 days" : " 28 days"));
            break;
    case 3: return ("March " + year + " had 31 days");
            break;
    case 4: return ("April " + year + " had 30 days");
            break;
    case 5: return ("May " + year + " had 31 days");
            break;
    case 6: return ("June " + year + " had 30 days");
            break;
    case 7: return ("July " + year + " had 31 days");
            break;
    case 8: return ("August " + year + " had 31 days");
            break;
    case 9: return ("September " + year + " had 30 days");
            break;
    case 10: return ("October " + year + " had 31 days");
            break;
    case 11: return ("November " + year + " had 30 days");
            break;
    case 12: return ("December " + year + " had 31 days");
            break;
    default: return ("Invalid month number");
  }
}
console.log(daysInMonth(1, 2012));
console.log(daysInMonth(2, 2012));
console.log(daysInMonth(2, 2014));

// Array to Object
function arrayToObj(arr) {
  var obj = {};
  for (var i = 0; i <= arr.length / 2; i += 2) {
    obj[arr[i]] = arr[i + 1];
  }
  return obj;
}

// Largest of 3 integers
function largestOf3(x, y, z) {
  var max = 0;
  if (x > y) {
    max = x;
  } else {
    max = y;
  }
  if (z > max) {
    max = z;
  }
  return max;
}
console.log(largestOf3(1,0,1));
console.log(largestOf3(0,-10,-20));
console.log(largestOf3(1000,510,440));

// Reverse String
function reverseString(str) {
  return str.split("").reverse().join("");
}
// alternate solution
function reverseString(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("LeBron"));
console.log(reverseString("James"));
console.log(reverseString("JavaScript"));

// Find the nth greatest element of a given array of integers
function nthLargest(arr, n) {
  for (var i = 0; i < n; i++) {
    var maxIndex = i,
      tmp = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    arr[i] = arr[maxIndex];
    arr[maxIndex] = tmp;
  }
  return arr[n - 1];
}
console.log(nthLargest([1,2,3,4,5], 2));
console.log(nthLargest([-10,-25,-47,-36,28,0,10], 1));

// Array Frequency
function frequencyNumbers(arr) {
  var frequency = {};
  var max = 0;
  var result;
  for(i = 0; i < arr.length; i++) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    if(frequency[arr[i]] > max) {
      max = frequency[arr[i]];
      result = arr[i];
    }
  }
  return frequency;
}
console.log(frequencyNumbers([2, 2, 4, 5, 1]));
console.log(frequencyNumbers([2, 41, 49, 5, 1, 1, 32, 12, 2, 41]));
