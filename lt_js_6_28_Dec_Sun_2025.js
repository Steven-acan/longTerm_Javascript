/**
 * @file lt_js_6_28_Dec_Sun_2025.js
 * @description
 * Long term studying of JavaScript
 * Resource: https://javascript.info/
 * Topic: An introduction to JavaScript
 * Where At: https://javascript.info/operators
 *           Basic operators, maths
 * @author StevenAcan <stevenacan@outlook.com>
 * @created 2025-12-28
 * @modified 2025-12-28
 * @version 1.0.0
 * @license e.g ( MIT (SPDX: MIT) )
 */

/* Study Notes:
1. Operands of different types are converted to numbers by the equality operator ==. 
An empty string, just like 'false', becomes a zero.

Questions:
1. how to check if a variable is Null or NaN before doing any logical comparisons?

To begin: Conditional branching: if, '?'
 */

"use strict";

let myInt1 = 5;

// initialize myInt2 then use compound assignment
let myInt2 = 2;

myInt2 *= myInt1;

console.log(myInt1 + " " + myInt2);

let myNaN1 = "test" / 2;
let myNaN2 = "test" / 3;

if (myNaN1 == myNaN2) {
  console.log("NaN is equal to NaN");
}
