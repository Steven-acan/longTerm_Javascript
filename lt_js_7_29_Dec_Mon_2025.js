/**
 * @file lt_js_7_29_Dec_Mon_2025.js
 * @description
 * Long term studying of JavaScript
 * Resource: https://javascript.info/
 * Topic: An introduction to JavaScript
 * Where At: https://javascript.info/operators
 *           Basic operators, maths
 * @author StevenAcan <stevenacan@outlook.com>
 * @created 2025-12-29
 * @modified 2025-12-29
 * @version 1.0.0
 * @license e.g ( MIT (SPDX: MIT) )
 */

/* Study Notes:
1. 

Questions:

To begin: Logical operators: !(NOT)
 */

"use strict";

let myName = "StevenAcan2";

if (myName == "StevenAcan") {
  console.log("Hello, Steven");
} else {
  console.log("Who are you?");
}

let myConditionToGo;

myConditionToGo = myName == "StevenAcan";

if (myConditionToGo) {
  console.log("Condition is true, welcome back Steven");
  console.log(myConditionToGo);
} else {
  console.log("Condition is false, who are you?");
}

let myConditionToGo2 = myName == "StevenAcan" ? true : false;

console.log(myConditionToGo2);

let myCondition = 1;
let myCondition2 = 0;
let myCondition3 = -1;

if (myCondition) {
  console.log("1 is true");
}

if (myCondition2) {
  console.log("0 is true");
} else {
  console.log("0 is false");
}

if (myCondition3) {
  console.log("-1 is true");
}

let a;
let b;

let myResult = (a = 1) || (b = 2);

console.log(myResult);
console.log(b);
console.log(a);

let c;
let myResult2 = (a = 1) && (b = 2) && (c = 3);

console.log(myResult2);
console.log(b);
// console.log(c);
