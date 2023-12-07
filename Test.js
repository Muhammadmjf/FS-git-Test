//You are given an array of numbers. Your task is to use iteration methods with arrow functions to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

// const n =nm.map(x) => x**2);

/*****************************************************************
Filtering

Write code to perform the following tasks using the filter method with arrow functions:
Q1) Create a new array containing numbers that are divisible by 5.
*****************************************************************/
const divisible5 = numbers.filter((x) => x / 5);
console.log(divisible5);
/*****************************************************************
Mapping

Write code to perform the following tasks using the filter method with arrow functions:
Q2) Create a new array that contains each number multiplied by 2.
*****************************************************************/
const multiplied2 = numbers.map((x) => x * 2);
console.log(multiplied2);

/*****************************************************************
Combining Filtering and Mapping

Combine the filter and map methods to perform the following task with arrow functions: 
Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
*****************************************************************/
const greaterThan = numbers.filter((x) => x >= 20).map((x) => x * x);
