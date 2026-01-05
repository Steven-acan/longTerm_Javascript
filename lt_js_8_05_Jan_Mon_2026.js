/**
 * @file lt_js_8_05_Jan_Mon_2026.js
 * @description
 * Long term studying of JavaScript
 * Resource: https://javascript.info/
 * Topic: An introduction to JavaScript
 * Where At: https://javascript.info/function-basics
 *           Functions
 * @author StevenAcan <stevenacan@outlook.com>
 * @created 2026-01-05
 * @modified 2026-01-05
 * @version 1.0.0
 * @license e.g ( MIT (SPDX: MIT) )
 */

/* Study Notes:
1. 

Questions:

To begin: Functions, https://javascript.info/function-basics


 */

"use strict";

// let myBoolean1 = 0;
// console.log(!"StevenAcan"); // false
// console.log(!myBoolean1);

// let myName;
// console.log(myName ?? "Guest");

let myName = "StevenAcan";
let theCounts = 0;

while (myName === "StevenAcan" && theCounts <= 10) {
  console.log(`My name is Steven Acan ${theCounts}`);

  theCounts++;
}

for (
  let theCounts = 0, myName = "StevenAcan";
  theCounts <= 10 && myName === "StevenAcan";
  theCounts++
) {
  console.log(`For Loop: My name is Steven Acan ${theCounts}`);
}
