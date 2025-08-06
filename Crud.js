// 1.Create a function to add a new user object to the users array.
let students=[
    {name:"Muhammad Sharif",age:22,email:"sharif@gmail.com"},
    {name:"Ali",age:23,email:"ali@gmail.com"},
]
function addUsers(name,age,email){
    const newUser={
        name:name,
        age:age,
        email:email

    }
    students.push(newUser);
}
addUsers("Hamza",30,"hamza@gmail.com");
console.log(students);

// 2.Read and display all products in the products array.
let product=[
    {id:1,name:"Laptop",price:30000},
    {id:2,name:"Mobile",price:25000},
    {id:3,name:"Tablet",price:20000},
]
function displayProducts() {
  product.forEach((product, index) => {
    console.log(`Product ${index + 1}:`);       
    console.log(`Name: ${product.name}`);       
    console.log(`Price: ${product.price}`);    
  });
}
displayProducts();

// 3.Update a user’s email by ID in the users array.
let users = [
  { id: 1, name: "Ali", email: "ali@gmail.com" },
  { id: 2, name: "Hamza", email: "hamza@gmail.com" },
  { id: 3, name: "Sharif", email: "sharif@gmail.com" }
].map((userz) => {
  if (userz.id === 2) {
    return { ...userz, email: "hamza123@gmail.com" };
  } else {
    return userz;
  }
});
console.log(users);

// 4.Delete a product by name from the product list.
let productList=[
    {id:1,name:"Apple",price:30000},
    {id:2,name:"Dell",price:25000},
    {id:3,name:"Lenovo",price:20000},
].filter(prd=> prd.name!="Dell")
console.log(productList);

// 5.Add a new task to a to-do list.
let todoList = [
  { id: 1, task: "Do homework", completed: false },
  { id: 2, task: "Buy groceries", completed: false }
];
let newTask = { id: 3, task: "Go to gym", completed: false };
todoList.push(newTask);
console.log(todoList);

// 6.Mark a to-do item as completed based on its ID.
const complete=todoList.map((cmp)=>{
    if(cmp.id === 2){
        return{...cmp,completed:true}
    }
    return cmp;
})
console.log(complete);

// 7.Remove all users with inactive status.
let std = [
  { id: 1, name: "Ali", status: "active" },
  { id: 2, name: "Hamza", status: "inactive" },
  { id: 3, name: "Sharif", status: "active" },
  { id: 4, name: "Ahmed", status: "inactive" }
].filter((user)=> user.status!="inactive");
console.log(std);

// 8.Update the quantity of a cart item based on its ID.
let cart = [
  { id: 1, name: "Laptop", quantity: 1 },
  { id: 2, name: "Mobile", quantity: 2 },
  { id: 3, name: "Tablet", quantity: 1 }
].map((item)=>{
    if(item.id ===2){
        return {...item,quantity:4}
    }
    else{
        return item;
    }
} )
console.log(cart);

// 9.Insert a student at a specific index in the students array.
let studnt = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Hamza" },
  { id: 3, name: "Sharif" }
];
const newstudent={ id: 4, name: "Adeel" };
studnt.splice(1,0,newstudent);
console.log(studnt);

// 10.Filter out all blog posts written by a certain author.
let blogPosts = [
  { id: 1, title: "JS Basics", author: "Ali" },
  { id: 2, title: "React Intro", author: "John" },
  { id: 3, title: "Advanced CSS", author: "John" },
  { id: 4, title: "Node.js", author: "Hamza" }
].filter(post => post.author !== "John");
console.log(blogPosts);

