// 1. Sum all numbers in an array
// What: Calculate the sum of all numbers in the array 'numbers'.
// How: Start from 0, and in each iteration add the current number to the total.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfNumbers = numbers.reduce((total, num) => total + num, 0);
console.log(sumOfNumbers);

// 2. Multiply all numbers in an array
// What: Calculate the product of all numbers in the array 'numbers'.
// How: Start from 1, and multiply each number in the array with the current product.
const multiplyNumbers = numbers.reduce((product, num) => product * num, 1);
console.log(multiplyNumbers);

// 3. Concatenate array of strings into a single sentence
// What: Merge all strings from the array into one sentence.
// How: Start with the first word and add a space followed by the next word until the array ends.
const wordsArray = ["My", "Name", "is", "Muhammad", "Sharif", "Khaqan"];
const sentence = wordsArray.reduce((acc, word) => acc + " " + word);
console.log(sentence);

// 4. Count the number of even numbers in an array
// What: Count how many numbers in the array 'mixedNumbers' are even.
// How: Check each number; if divisible by 2, increment the count, otherwise leave it.
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const evenCount = mixedNumbers.reduce((count, num) => (num % 2 === 0 ? count + 1 : count), 0);
console.log(evenCount);

// 5. Calculate total price from array of products
// What: Calculate the total price of all products in 'productList'.
// How: Start from 0, and add each product's price to the total.
const productList = [
  { name: "Product1", price: 150 },
  { name: "Product2", price: 250 },
  { name: "Product3", price: 300 },
  { name: "Product4", price: 350 },
  { name: "Product5", price: 500 },
];
const totalPrice = productList.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);

// 6. Count frequency of each word in an array
// What: Count how many times each word appears in the 'fruits' array.
// How: For each fruit, increase its count in the object, starting from 0 if it doesn't exist.
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordFrequency = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(wordFrequency);

// 7. Calculate the average age of users
// What: Find the average age from the 'userList'.
// How: Add up all ages using reduce, then divide by the number of users.
const userList = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Usman", age: 35 },
  { name: "Ayesha", age: 40 },
];
const totalAge = userList.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / userList.length;
console.log(averageAge);

// 8. Count how many boolean values are true
// What: Count how many true values exist in the 'booleanFlags' array.
// How: Add 1 for each true value, otherwise add 0.
const booleanFlags = [true, false, true, true, false, false, true];
const trueCount = booleanFlags.reduce((count, value) => count + (value === true ? 1 : 0), 0);
console.log(trueCount);

// 9. Find the longest word in an array of strings
// What: Get the word with the most characters from 'wordsList'.
// How: Compare each word's length with the current longest; replace if it's longer.
const wordsList = ["JavaScript", "is", "fun", "and", "challenging"];
const longestWord = wordsList.reduce((longest, word) => 
  word.length > longest.length ? word : longest
, "");
console.log(longestWord);

// 10. Find the highest scoring student from an array of student objects
// What: Get the student object with the highest score from 'students'.
// How: Compare each student's score with the current best's score, replacing if higher.
const students = [
  { name: "Ali", score: 85 },
  { name: "Sara", score: 92 },
  { name: "Usman", score: 78 },
  { name: "Ayesha", score: 95 }
];
const topStudent = students.reduce((best, student) => 
  student.score > best.score ? student : best
);
console.log(topStudent);
