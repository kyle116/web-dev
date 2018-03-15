# Saturday

## Complete Code Academy's JavaScript course
* Code Academy JavaScript: [https://www.codecademy.com/learn/introduction-to-javascript](https://www.codecademy.com/learn/introduction-to-javascript)

## Things to know about JavaScript
#### Hoisting - https://www.w3schools.com/js/js_hoisting.asp
In JavaScript declarations are hoisted NOT initializations! What does this mean? In this example
```
x = 5; // Assign 5 to x

x = x + 1 // x is 6

var x; // Declare x
```

x is available since the declaration is hoisted above. This is what JavaScript is actually doing:
```
var x; // Declare x

x = 5; // Assign 5 to x

x = x + 1 // x is 6
```

Another example:
```
var x = 5; // Initialize x

console.log(y); // y will be undefined

var y = 7; // Initialize y
```

y will be undefined due to JavaScript actually doing this:
```
var x = 5; // Initialize x
var y;     // Declare y

console.log(y); // y will be undefined

y = 7;    // Assign 7 to y
```

As you can see, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.


#### Variable Scoping
JavaScript has two scopes – global and local. Variables declared outside of functions are on the global scope and can be accessed anywhere on our code. Variables declared within functions with `var` or `let` have a local scope. If you declare a variable without `var` or `let` like:
```
function scope() {
  test = "variable scope"
}
```

The `test` variable will be accessible outside of the function.

Using `let` will keep the variable within block scope. Example:
```
var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// expected output: 2

console.log(y);
// expected output: 1
```

#### Double Equal(==) vs Triple Equal(===)
Triple Equal `===` is called Strict equality in JavaScript. Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal.

Double Equal `==` is called loose equality in JavaScript. Loose equality compares two values for equality, after converting both values to a common type. After conversions (one or both sides may undergo conversions), the final equality comparison is performed exactly as === performs it.

It is typically better to use Strict Equality/Triple Equal over Loose Equality/Double Equal to avoid errors.

#### Object Comparison
It is also important to note whether 2 objects are the same, you probably mean if they contain the same exact things, do not do this:
```
var jangoFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

var bobaFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

console.log(bobaFett === jangoFett);
// Outputs: false
```

As you can see, the output will be false. Well the reason for this is because JavaScript compares Object references. What this means is JavaScript basically checks to see if the objects given refer to the same location in memory.
```
var jangoFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

var bobaFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

var callMeJango = jangoFett;

// Outputs: false
console.log(bobaFett === jangoFett);

// Outputs: true
console.log(callMeJango === jangoFett);
```
Here in this example. The variable callMeJango is being set to the reference of jangoFett. Therefore `console.log(callMeJango === jangoFett);` will be true.

#### Extended reading
Hoisting and Scoping:

https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/


Scope with let, const, and var:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block


Equality comparisons and sameness:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness


Object Equality:

http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
