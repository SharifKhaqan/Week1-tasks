// 1.You have an array of numbers. Convert each number to its square.
let arr=[1,2,3,5,6,7,8,9]
const result=arr.map(num=>num*num)
console.log(result);

// 2.You have an array of names. Return a new array with each name in uppercase.
let name=["Sharif","Khaqan","Ali","Hamza"];
const result1=name.map(name => name.toUpperCase())
console.log(result1);

// 3.Given an array of user objects with {firstName, lastName}, return an array of full names.
let users=[
    {firstname:"Muhammad",lastname:"Sharif"},
    {firstname:"Ali",lastname:"Hamza"},
    {firstname:"Adeel",lastname:"Riaz"},
]
let result2=users.map((user)=>{
    return `The full name of this user name is ${user.firstname} ${user.lastname}. `
})
console.log(result2);

// 4.You have an array of prices in dollars. Convert them to PKR (e.g., 1 USD = 280 PKR).
let prices=["3","6","8","12"].map(price=> `The price in PKR is Pkr-${price*280}`);
console.log(prices);

// 5.An array of product objects has a price field. Add a 10% discount to each and return a new array with the discounted prices.
let product=[
    {item:"a",price:250},
    {item:"b",price:750},
    {item:"c",price:1250},
]
let discountPrice=product.map(prices => `The new price for ${prices.item} is ${prices.price*(1-10/100)}`)
console.log(discountPrice);

// 6.Convert an array of temperatures in Celsius to Fahrenheit.
let temp=["32","44","52"].map(temperature=> `After converting the temperature from celsius to Farenheit ${(temperature*9/5)+32} Fareheit.`)
console.log(temp);

// 7.You have an array of strings. Return a new array containing the lengths of each string
let length=["Muhammad","Sharif","Khaqan","Fayyaz"].map(names=> names.length);
console.log(length);

// 8.Given an array of numbers, return an array with a boolean indicating if each number is even.
let numberz=[1,2,3,4,5,6,7,8,9].map(num=>  num%2===0)
console.log(numberz);

// 9.You have an array of student objects with marks. Return a new array containing only their grades (A/B/C...).
let student=[
    {name:"Ali",marks:295},
    {name:"Hamza",marks:450},
    {name:"Sharif",marks:490},
    {name:"Adeel",marks:350},
].map(student=> {
    const marks = student.marks;
    if (marks >= 480) return "A";
    else if (marks >= 400) return "B";
    else if (marks >= 350) return "C"; 
    else if (marks >= 300) return "D";
    else return "F";
})
console.log(student);

// 10.Convert an array of date strings into Date object
const formattedDates = ["2025-08-05", "2024-12-31", "2023-01-01"].map(dateStr => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
});
console.log(formattedDates);



