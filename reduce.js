// 1.Sum all numbers in an array.
let arr=[1,2,3,4,5,6,7,8,9,10].reduce((acc,sum) =>acc+sum);
console.log(arr);

// 2.Multiply all numbers in an array.
let mul=[1,2,3,4,5,6,7,8,9,10].reduce((acc,mul) =>acc*mul);
console.log(mul);

// 3.From an array of strings, concatenate them into a single sentence.
let str=["My","Name","is","Muhammad","Sharif","Khaqan"].reduce((acc,string) => acc+" "+string)
console.log(str);

// 4.Count the number of even numbers in an array.
let even=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].reduce((acc,ev) => {
    if(ev%2==0){
      return acc+1;
    }
    return acc;
},0)
console.log(even)

// 5.From an array of product objects, calculate the total price.
let products=[
    {name:"Product1",price:150},
    {name:"Product2",price:250},
    {name:"Product3",price:300},
    {name:"Product4",price:350},
    {name:"Product5",price:500},
].reduce((acc,product) => acc+=product.price,0)
console.log(products)

// 6.Count the frequency of each word in an array of words.
let words = ["apple", "banana", "apple", "orange", "banana", "apple"].reduce((acc,freq)=>{
    if(acc[freq]){
        acc[freq] +=1;
    }
    else{
        acc[freq]=1;
    }
    return acc;
},{}  
)
console.log(words);

// 7.From an array of user objects with an age, calculate the average age.
const users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Usman", age: 35 },
  { name: "Ayesha", age: 40 }
].reduce((final,user)=> final+user.age,0)
console.log(users);

// 8.From an array of boolean values, count how many are true.
const flags = [true, false, true, true, false, false, true].reduce((acc,bol) => {
    return acc+(bol ===true ?1:0)
},0)
console.log(flags);

// 9.



