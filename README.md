Questions and Answers
1. What is the difference between var, let, and const?

In JavaScript, var, let, and const are used to declare variables.

var

Function scoped

Can be redeclared

Can be updated

Example:

var name = "John";
var name = "Mike";
let

Block scoped

Cannot be redeclared in the same scope

Can be updated

Example:

let age = 20;
age = 25;
const

Block scoped

Cannot be redeclared

Cannot be reassigned

Example:

const country = "Bangladesh";

In modern JavaScript, developers usually prefer let and const instead of var.

2. What is the spread operator (...)?

The spread operator (...) is used to expand elements of an array or object.

It allows us to copy or merge arrays and objects easily.

Example with array:

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

Result:

[1,2,3,4,5]

Example with object:

const user = {name: "Hafiz"};
const newUser = {...user, age: 22};

Spread operator is very useful in modern JavaScript development.

3. What is the difference between map(), filter(), and forEach()?

These are JavaScript array methods used to work with arrays.

map()

Creates a new array

Applies a function to every element

Example:

const numbers = [1,2,3];
const doubled = numbers.map(n => n * 2);

Result:

[2,4,6]
filter()

Creates a new array

Returns elements that match a condition

Example:

const numbers = [1,2,3,4];
const even = numbers.filter(n => n % 2 === 0);

Result:

[2,4]
forEach()

Loops through an array

Does not return a new array

Example:

const numbers = [1,2,3];
numbers.forEach(n => console.log(n));
4. What is an arrow function?

An arrow function is a shorter way to write functions in JavaScript.

It was introduced in ES6 and is widely used in modern JavaScript.

Normal function:

function add(a, b){
return a + b;
}

Arrow function:

const add = (a, b) => a + b;

Arrow functions are commonly used in React, Node.js, and modern web development.

5. What are template literals?

Template literals allow us to write strings in a cleaner and more flexible way.

They use backticks ( ) instead of quotes.

They also allow string interpolation.

Example:

const name = "Hafiz";
const message = `Hello ${name}`;

Output:

Hello Hafiz

Template literals also support multi-line strings, which makes them very useful in JavaScript.