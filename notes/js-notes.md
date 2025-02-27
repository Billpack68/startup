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