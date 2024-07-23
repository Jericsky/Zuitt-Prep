console.log("Hello World");

//Monthly Expenses
let monthlyIncome = 4000;
let monthlyRent = 1200;
let monthlyGroceries = 450;
let monthlyTransportation = 300;
let monthlyUtilities = 200;
let monthlyEntertainment = 150;
let monthlyBudget = 2500;

let totalMonthlyExpenses = monthlyRent + monthlyGroceries + monthlyTransportation + monthlyUtilities + monthlyEntertainment;
console.log(`Total Monthly Expenses: ${totalMonthlyExpenses}`); 

let monthlySavings = monthlyIncome - totalMonthlyExpenses;
console.log(`Monthly Savings: ${monthlySavings}`);

let isWithinBudget = monthlyBudget > totalMonthlyExpenses;
console.log(`Is Within Budget: ${isWithinBudget}`);

//Circle
let radius = 7;
const pi = 3.14159;

let resultArea = pi * radius ** 2;
console.log(`Area of the circle: ${resultArea}`);

let resultCircumference = 2 * pi * radius;
console.log(`Circumference of the circle: ${resultCircumference}`);

//Triangle
let base = 10;
let height = 8;
let side1 = 5;
let side2 = 7;
let side3 = 9;

let area = (base * height) / 2;
console.log(`Area of the triangle: ${area} square cm`);

let perimeter = side1 + side2 + side3;
console.log(`Peimeter of the triangle: ${perimeter} square cm`);