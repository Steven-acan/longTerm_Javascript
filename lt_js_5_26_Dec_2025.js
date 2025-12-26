/**
 * @file lt_js_5_26_Dec_2025.js
 * @description
 * Long term studying of JavaScript
 * Resource: https://javascript.info/
 * Topic: An introduction to JavaScript
 * Where At: https://javascript.info/operators
 *           Basic operators, maths
 * @author StevenAcan <stevenacan@outlook.com>
 * @created 2025-12-26
 * @modified 2025-12-26
 * @version 1.0.0
 * @license e.g ( MIT (SPDX: MIT) )
 */

/* Study Notes:
 *** Basic operators, maths
 to begin: Chaining assignments
 */

"use strict";

console.log(5 % 2);
console.log(8 % 2);

console.log(3 ** 2);

// Square root
console.log(4 ** (1 / 2));
console.log(5 ** (1 / 2));

console.log("Steven" + "Acan");
console.log("Steven" + "Acan");
console.log("Steven" + 1);
console.log("1" + "2");
console.log("1" + 2);

console.log(6 - "2");

console.log(+"6");
console.log(typeof +"6");
console.log(+"Steven");

let myNaN = NaN;
console.log(myNaN);
console.log(typeof myNaN);

let myNaN2 = Number("Steven");

if (myNaN === myNaN2) {
  console.log("NaN is equal to NaN");
}
