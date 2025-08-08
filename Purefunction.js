// 1. Write a pure function that adds two numbers.
// WHY: This function is pure because it always returns the same result for the same inputs 
// and does not modify anything outside its scope.
// USE CASE: Useful in mathematical calculations where predictable results are needed.
function add(a, b) {
    return a + b; 
}
console.log(add(5, 10));  
console.log(add(20, 10));  


// 2. Create a pure function that returns a full name from first and last names.
// WHY: Combines first and last name without changing any external data.
// USE CASE: Generating a full name for display in a profile or user interface.
function fullName(firstname, lastname) {
    return `${firstname} ${lastname}`;
}
console.log(fullName("Sharif", "Khaqan"));
console.log(fullName("Adeel", "Riaz"));
console.log(fullName("Ghayour", "Mehdi"));


// 3. Create a function to calculate the square of a number without modifying any global variable.
// WHY: Keeps calculations self-contained, avoiding unintended changes to other parts of the program.
// USE CASE: Performing mathematical operations in scientific or financial apps.
function square(a) {
    return a * a; 
}
console.log(square(2)); 
console.log(square(3)); 
console.log(square(4)); 


// 4. Write a function to return a capitalized version of a string.
// WHY: Converts all letters in the string to uppercase.
// USE CASE: Formatting names, headings, or standardizing text before saving to a database.
function capitalized(name){
    return name.toUpperCase();
}
console.log(capitalized("Sharif Khaqan"));
console.log(capitalized("hamza"));


// 5. Implement a function that returns a new array with only positive numbers.
// WHY: Filters out negative numbers while keeping the original array unchanged.
// USE CASE: Cleaning datasets where only positive values are valid (e.g., product prices, scores).
function positiveNumbers(number){
     return number.filter(num => num >= 0)
}
let array = [1, 2, 3, -6, -7, -22, 5, -99, -2, 55, 66, -55, 12, -25];
console.log(positiveNumbers(array));


// 6. Create a function that returns a new object with updated age, without modifying the original object.
// WHY: Uses the spread operator to copy existing properties and update only the required one.
// USE CASE: Updating user profile data in immutable data structures.
function student(student, updatedAge){
     return {
        ...student,
        age: updatedAge
     }
}
let studentObj = { name: "Sharif Khaqan", age: 21, email: "sharifkhaqan5@gmail.com" };
console.log(student(studentObj, 25));


// 7. Write a function that takes a list of prices and applies tax to each, returning a new list.
// WHY: Adds tax to each price without altering the original price list.
// USE CASE: E-commerce applications to display final prices after tax.
function applyTax(prices, taxRate) {
    return prices.map(price => price + (price * taxRate));
}
let priceList = [100, 200, 300, 400];
let taxRate = 0.1; 
console.log(applyTax(priceList, taxRate)); 


// 8. Create a function that checks if a year is a leap year without any logging or alerts.
// WHY: Purely checks the leap year rule and returns a boolean value.
// USE CASE: Calendar systems, date pickers, or scheduling applications.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023));


// 9. Build a function to reverse a string.
// WHY: Splits the string into characters, reverses the order, and joins them back.
// USE CASE: Data transformations, encryption algorithms, or coding puzzles.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 
console.log(reverseString("JavaScript")); 


// 10. Write a function that removes a specific element from an array without changing the original array.
// WHY: Filters out the given element while keeping the original array intact.
// USE CASE: Removing unwanted items from shopping cart or removing invalid data entries.
function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}
let numbers = [1, 2, 3, 4, 5];
let newNumbers = removeElement(numbers, 3);
console.log(newNumbers);  
console.log(numbers);     
