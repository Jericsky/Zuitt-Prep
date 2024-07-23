console.log("Hello world")

// Section Arithmetic Operator

let x = 1397;
let y = 7831;

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;

console.log(`Addition Operator: ${sum}`);
console.log(`SUbtraction Operator: ${difference}`);
console.log(`Multiplication Operator: ${product}`);
console.log(`Diivision Operator: ${quotient}`);

//Section Assignment Operator
/*
	- Basic Assignment Operator (=)
	- Additional Assignment OPerator (+=)
	- Suctraction, Multiplication, Division Assignment Operator (-=, *= /=)
*/

let assignmentNumber = 8;

assignmentNumber = assignmentNumber + 2;
console.log(`Assignment Operator: ${assignmentNumber}`);

assignmentNumber += 5;
console.log(`Assignment Operator: ${assignmentNumber}`);

// Section Comparison Operators

// Strict Equality Operator
/*
	- have same content
	- compares data types
*/
console.log("Strict Equality")
console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(0 === false);
console.log('juan' === 'juan');

// Strict Inequality Operator
console.log("Strict Inequality")
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== '1');
console.log(1 !== false);
console.log('juan' !== 'juan');

// Section Relational Operator

let a = 50;
let b = 65;

let isGreaterThan = a > b;

let isLessThan = a < b;

let isGTorEqual = a>= b;

let isLTorEqual = a <= b;

console.log("Relational Operator");

console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGTorEqual);
console.log(isLessThan);

console.log("----------");

let numStr = "30";
console.log(a > numStr);
console.log(b <= numStr);

let str = "twenty";
console.log(b >= str);





























