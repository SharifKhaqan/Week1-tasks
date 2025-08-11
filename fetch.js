// 1. Use fetch to get data from a public API (e.g., JSONPlaceholder posts) and log the JSON response to the console using .then().
// HOW: Call fetch() with the API URL, then convert response to JSON, then log the data.
// WHY: fetch() returns a promise; .then() chains let us process the asynchronous response.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())  
  .then((data) => {
    console.log(data);  
  })
  .catch((error) => {
    console.log("Error in Fetching the Data");  
  });

// 2. Handle fetch errors: Fetch data from an invalid URL and handle errors properly with .catch() to show an error message.
// HOW: Check response.ok to detect HTTP errors like 404; throw error if not OK.
// WHY: fetch only rejects on network failure, so manual check needed for HTTP errors.
fetch('https://jsonplaceholder.typicode.com/invalidendpoint')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();  
  })
  .then(data => {
    console.log(data);  
  })
  .catch(error => {
    console.log("The Error is", error);  
  });

// 3. Chaining .then() calls: Fetch a list of users from an API, then in the next .then() extract and log the first user's name.
// HOW: First .then() parses JSON; second .then() processes parsed users array.
// WHY: Chaining .then() allows sequential processing of async steps.
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);  
    }
    return response.json();  
  })
  .then(users => {
    console.log('First user name:', users[0].name);    })
  .catch(error => {
    console.error('Error fetching users:', error);  
  });

// 4. Use async/await to fetch and log: Write an async function that fetches user data from an API and logs it, using await instead of .then().
// HOW: Use async function and await to handle promises more readably.
// WHY: async/await makes asynchronous code look synchronous and easier to read.
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);  
    }
    const users = await response.json();  
    console.log(users);  
  } catch (error) {
    console.error('Error fetching users:', error);  
  }
}
fetchUsers();

// 5. Multiple fetch requests with Promise.all: Fetch data from two different APIs simultaneously using Promise.all and log both results once completed.
// HOW: Use Promise.all with array of fetch promises to run concurrently.
// WHY: Promise.all waits for all promises to resolve, improving performance with parallel requests.
const url1 = 'https://jsonplaceholder.typicode.com/posts';
const url2 = 'https://jsonplaceholder.typicode.com/users';

Promise.all([
  fetch(url1).then(res => {
    if (!res.ok) throw new Error(`Error fetching posts: ${res.status}`);  
    return res.json();  
  }),
  fetch(url2).then(res => {
    if (!res.ok) throw new Error(`Error fetching users: ${res.status}`);  
    return res.json();  
  })
])
.then(([posts, users]) => {
  console.log('Posts:', posts);  
  console.log('Users:', users);  
})
.catch(error => {
  console.error('One or more requests failed:', error);  
  
});