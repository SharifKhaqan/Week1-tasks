// 1.Create a function applyOperation(arr, fn) that takes an array and a function to apply on each element.
function applyOperation(arr,fn){
       return arr.map(fn);
}
let array=[1,2,3,4,5];
function suqare(num){
    return num*num; 
}
let result=applyOperation(array,suqare);
console.log(result);

// 2.Write a HOF that logs a message before and after running another function.
function message(sec){
    console.log("I am the first function.");
    sec();
}
function second(){
    console.log("I am the second function executes after the first function");
}
message(second)

// 3.Create a repeat(fn, n) function that runs a callback n times.
n=5;
function repeat(fn,n){
   for(let i=0; i<n; i++){
    fn();
   }}
function repeating(){
    console.log("Hey am repeating");
}
repeat(repeating,n);

// 4.Create a filterStrings(arr, fn) that filters strings based on a provided condition function
function filterStrings(arr,fn){
    return arr.filter(fn);
}
function xyz(name){
    return name.startsWith("S");
}
let arrStr=["Sharif","Khaqan","Ali","Shumail","Ayesha","Fatima"];
const repons=filterStrings(arrStr,xyz);
console.log(repons);

// 5.Write a HOF createMultiplier(x) that returns a function to multiply any number by x.
function createMultiplier(x){
    return function(num){
        return x*num;
    }
}
const multiplyresult=createMultiplier(5);
console.log(multiplyresult(6));

// 6.Implement a withLogging(fn) wrapper that logs the execution time of any function.
function withLogging(fn) {
  return function (...args) {
    console.time("Execution Time");
    const result = fn(...args);
    console.timeEnd("Execution Time");
    return result;
  };
}
function add(a, b) {
  return a + b;
}
const loggedAdd = withLogging(add);
console.log(loggedAdd(5, 10));

// 7.Create a function that accepts a validation function and applies it to a list of inputs.
function validateInputs(inputs, validationFn) {
  return inputs.filter(validationFn);
}
function isEven(num) {
  return num % 2 === 0;
}
let numbers = [1, 2, 3, 4, 5, 6];
let validNumbers = validateInputs(numbers, isEven);
console.log(validNumbers); 

// 8.Write a function withTryCatch(fn) that catches and logs errors of any function passed to it.
function withTryCatch(fn){
    return function(...args){
          try {
      return fn(...args);
    } catch (error) {
      console.error("An error occurred:", error.message);
      
    }
    }
}
function risky(num){
    if(num<0) throw new Error ("Negative Number not Allowed");
    return Math.sqrt(num);
}
const ans=withTryCatch(risky);
console.log(ans(25));
console.log(ans(-4));

// 9.Build a function sortByProperty(arr, key, compareFn) that can sort objects by any key using a comparison function.
function sortByProperty(arr, key, compareFn) {
  return arr.sort((a, b) => compareFn(a[key], b[key]));
}
const people = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 20 },
  { name: "John", age: 30 }
];
const sortedByAge = sortByProperty(people, 'age', (a, b) => a - b);
console.log(sortedByAge);

// 10.Create a function compose(f, g) that returns a new function which is f(g(x)).
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}
function double(n) {
  return n * 2;
}
function square(n) {
  return n * n;
}
const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(5)); 


