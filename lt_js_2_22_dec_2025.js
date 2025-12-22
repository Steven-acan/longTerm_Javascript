/**
 * @file lt_js_2_22_Dec_2025.js
 * @description
 * Long term studying of JavaScript
 * Resource: https://javascript.info/
 * Topic: An introduction to JavaScript
 * Where At: "BigInt", https://javascript.info/types
 * @author StevenAcan <stevenacan@outlook.com>
 * @created 2025-12-22
 * @modified 2025-12-22
 * @version 1.0.0
 * @license e.g ( MIT (SPDX: MIT) )
 */

/* Study Notes:

1. Better to add semicolon at the end of each statement to avoid automatic semicolon insertion issues.

*/

"use strict";

console.log("Hello, JavaScript!");

let myAge = 30;
let myHight = 175;
let myWeight = 192.5;
let myName = "Steven Acan";

const myNickName = "StevenNN";

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Height:", myHight, "cm");

myName = "Steven Liu";
console.log("Updated Name:", myName);

console.log(typeof myAge, typeof myName, typeof myWeight);

let myInfinity = 1 / 0;
console.log(myInfinity);

let myNotANumber = "abc" / 2;
console.log(myNotANumber);
console.log(typeof myNotANumber);
