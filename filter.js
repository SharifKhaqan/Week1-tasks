// 1.From an array of numbers, filter out only even numbers.
let numbers=[1,2,3,4,5,6,7,8,9,10].filter(num =>num%2===0)
console.log(numbers);

// 2.You have an array of student objects. Filter students who scored more than 80.
let student=[
    {name:"Sharif Khaqan",marks:66},
    {name:"Sharif Khaqan",marks:96},
    {name:"Sharif Khaqan",marks:34},
    {name:"Sharif Khaqan",marks:150},
    {name:"Sharif Khaqan",marks:100},
    {name:"Sharif Khaqan",marks:82},
].filter(std => std.marks>80);
console.log(student);

// 3.From an array of strings, keep only those that are longer than 5 characters.
let names=["Sharif","Ali","Noor","Hamza","Sad","Hina","Kumail"].filter(nam => nam.length>5);
console.log(names);

// 4.From an array of product objects, get only those that are in stock (inStock: true).
let products=[
    {name:"Dell",instock:true},
    {name:"lenovo",instock:false},
    {name:"Hp",instock:true},
    {name:"Apple",instock:false},
    {name:"Dell-gen6",instock:true},
    {name:"Dell-gen5",instock:true},
    {name:"Dell-gen4",instock:false},
].filter(prd => prd.instock===true);
console.log(products)

// 5.From a list of users, return only those with the role of “admin”.
let userz = [
    { name: "Ali", role: "admin" },
    { name: "Sara", role: "user" },
    { name: "John", role: "admin" },
    { name: "Ayesha", role: "moderator" },
    { name: "David", role: "user" },
    { name: "Zain", role: "admin" }
].filter(usr => usr.role=="admin")
console.log(userz);

// 6.Given an array of ages, return only those eligible to vote (age >= 18).
let ages=[11,14,26,34,28,25,22,19,20,9,8].filter(age =>age>18);
console.log(ages);

// 7.Filter out all null or undefined values from an array.
let mixedArray = [1, null, 2, undefined, 3, null, 4, undefined, 5].filter(val => val!=null)
console.log(mixedArray);

// 8.From an array of cities, return only those starting with the letter 'L'.
 let cities = ["Lahore","Karachi","Islamabad","Larkana","Multan","Lodhran","Peshawar","Layyah","Quetta"]
 .filter(city =>city.startsWith('L'))
 console.log(cities);

// 9.Given a list of people with isVaccinated boolean, filter those who are vaccinated. 
let pepl = [
  { name: "Ali", isVaccinated: true },
  { name: "Sara", isVaccinated: false },
  { name: "Ahmed", isVaccinated: true },
  { name: "Zara", isVaccinated: false },
  { name: "Usman", isVaccinated: true }
].filter(peopel=> peopel.isVaccinated==true);
console.log(pepl);

// 10.From an array of movies, get only the ones released after 2020
let movies = [
  { title: "The Legend", releaseYear: 2019 },
  { title: "Future World", releaseYear: 2021 },
  { title: "Next Gen", releaseYear: 2023 },
  { title: "Old Times", releaseYear: 2018 },
  { title: "New Era", releaseYear: 2022 }
].filter(movi => movi.releaseYear>2020);
console.log(movies);


