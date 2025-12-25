/**
 * @file lt_js_4_25_Dec_2025.js
 * @description
 * Long term studying of JavaScript
 * Resource: https://javascript.info/
 * Topic: An introduction to JavaScript
 * Where At: https://javascript.info/operators
 *           Basic operators, maths
 * @author StevenAcan <stevenacan@outlook.com>
 * @created 2025-12-25
 * @modified 2025-12-25
 * @version 1.0.0
 * @license e.g ( MIT (SPDX: MIT) )
 */

/* Study Notes:
    *** Type Conversions


*/

"use strict";

console.log(typeof String());
console.log(typeof String);
console.log(String());
if (String() === "") {
  console.log("Empty String");
}

let myName = "StevenAcan";
let myAge = Number(myName);
console.log(myAge);

if (myAge != NaN) {
  console.log("NaN is NaN");
}

let myHight;
console.log(myHight);

myHight = null;
console.log(myHight);

let myBlankString = "";

if (myBlankString != myHight) {
  console.log("Blank String is not equal to null");
}
