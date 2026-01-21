/**
 * @file lt_js_9_21_Jan_Mon_2026.js
 * @description
 * Long term studying of JavaScript
 * Resource: https://javascript.info/
 * Topic: An introduction to JavaScript
 * Where At: https://javascript.info/function-basics
 *           Functions
 * @author StevenAcan <stevenacan@outlook.com>
 * @created 2026-01-21
 * @modified 2026-01-21
 * @version 1.0.0
 * @license e.g ( MIT (SPDX: MIT) )
 */

/* Study Notes:
1. 

Questions:

To begin:  https://javascript.info/arrow-functions-basics


 */

"use strict";

function sayHello() {
  console.log("Hello, This is Steven Acan!(FM: sayHello())");
}

sayHello();
sayHello();

function sayHello2() {
  let myName = "StevenAcan";

  console.log(`Hello, This is ${myName}! (FM: sayHello2())`);
}

sayHello2();
sayHello2();

let myName = "StevenAcan";

function sayHello3() {
  console.log(`Hello, This is ${myName}! (FM: sayHello3())`);
}

sayHello3();

function sayHello4(name = "buddy") {
  console.log(`Hello, This is ${name}! (FM: sayHello4())`);
  return "1";
}

sayHello4();
let theResultOfFunction = sayHello4("StevenAcan");

console.log(typeof theResultOfFunction); // undefined

let sayHello5 = function () {
  console.log("Hello from sayHello5 function expression!");
};

sayHello5();
console.log(sayHello5);
console.log(typeof sayHello5);
