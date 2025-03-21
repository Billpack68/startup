# JS Notes

## Referencing it in html

- Option 1: `<script src="filename.js"></script>`
- Option 2: `<script> /*Just put the JS code here*/ </script>`
- Option 3: define variables in the JS within the HTML `<script> let i = 1; </script>`

## Debugging

- You can go into the console deep stuff and click on source and see the JS and add breakpoints that are triggered upon refresh (super cool)

## Basics

- `console.log("text")` to log stuff in the console
- `console.log` can include CSS declarations
- define functions `function name(input1, input2) {}`
- function parameters can have default values
- you can do `const varName = function funcName() {}` to make that function a variable that you can pass to another function
- `=>` is kind of like a lambda function
- You can return a function and define functions within functions
- Accepts line and block comments `//` and `/**/`
- `console.time('time name')` to start a timer and `console.timeEnd('time name')` to end it
- `console.count('counter name')` to count every time that line is run

## Arrow Functions

- Arrow functions can use {} `() => {}` but then they don't return anything unless you use return
- Arrow functions can reference variables from when they're created, even if they're in another scope

## Objects

- Similar to objects in other programming languages
- `const object = new Object({properties/functions/methods/etc.})`
- `Object.entries('objName')` returns an array of entries, Object.keys returns keys, Object.values returns values
- PRESSING THE SUBMIT BUTTON WILL CREATE A REVIEW OBJECT
- Use `#` before the names of member variables and methods to make them private
- `class Employee extends Person` extends pulls down all the information from the higher class
- use `super.method()` to call methods from the parent class

## Time Delays

- `setTimeout(Lambda function, time)` does the lambda function after the time amount (but other stuff keeps going on in the meantime)
- `setInterval(lambda function, time)` does the lambda function ever so often (the time amount you specify)

## JSON

- `JSON.parse` and `JSON.stringify` to convert between JSON and JS

## localStorage

- Put information into local storage that you can reference later (from a different page on the website,etc)
- Can cache information for the next time the browser visits the website in case the server isn't working

## Promises/async

- You can make a function asyncronous and use await to make stuff happen in the background and then execute the code after a certain something happens

## Fetching

- Fetching is for getting and putting information on the internet. Pretty cool stuff. Will figure it out by doing the simon part.

## Modules

- You can import JS modules using `const varname = require('filepath/name');`