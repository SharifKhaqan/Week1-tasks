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

// 6. Fetch with query parameters: Use fetch to get a list of posts filtered by user ID by passing query parameters to the API.
// HOW: Append query parameters (?userId=...) to the URL string before passing it to fetch.
// WHY: Query parameters let you request specific filtered data from an API.
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;
const urlWithParams = `${baseUrl}?userId=${userId}`;
fetch(urlWithParams)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.status}`);
    }
    return response.json(); 
  })
  .then(posts => {
    console.log(`Posts for user ID ${userId}:`, posts);
  })
  .catch(error => {
    console.error('Fetch failed:', error);
  });


// 7. Create a loading indicator: Display a loading message while data is being fetched, then replace it with the data once loaded.
// HOW: Log "Loading..." before fetch, clear console after fetch completes, and display the data.
// WHY: This improves user experience by indicating ongoing background work.
async function fetchData() {
  try {
    console.log("Loading data...");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    console.clear();
    console.log("Data loaded successfully:");
    console.log(data);
  } catch (error) {
    console.clear();
    console.error("Failed to fetch data:", error.message);
  }
}
fetchData();


// 8. Error handling with try/catch in async functions: Fetch data and gracefully handle network or parsing errors.
// HOW: Wrap fetch and JSON parsing inside a try/catch block to catch errors.
// WHY: This prevents the program from crashing and shows clear error messages.
async function fetchDataWithErrorHandling() {
  try {
    console.log("Loading data...");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.clear();
    console.log("Data loaded successfully:");
    console.log(data);
  } catch (error) {
    console.clear();
    console.error("Failed to fetch data:", error.message);
  }
}
fetchDataWithErrorHandling();


// 9. Fetch and post data: Send JSON data to an API using POST method and log the server's response.
// HOW: Use fetch with 'POST' method, set 'Content-Type' header, and stringify the body.
// WHY: POST requests are used to send new data to the server.
async function postData() {
    try {
        const newPost = {
            title: "Hello World",
            body: "This is my first post using fetch POST method!",
            userId: 1};
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        });
        const data = await response.json();
        console.log("Response from server:", data);
    } 
    catch (error) {
        console.error("Error posting data:", error);
    }
}
postData();


// 10. Fetch the first 10 posts and display each title with its total number of comments.
// HOW: First fetch posts (limit 10), then loop through them and fetch related comments for each post.
// WHY: Demonstrates sequential fetch calls where the second fetch depends on the first's results.
async function fetchPostsWithComments() {
  try {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    if (!postsResponse.ok) {
      throw new Error(`Error fetching posts: ${postsResponse.status}`);
    }
    const posts = await postsResponse.json();
    for (const post of posts) {
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
      if (!commentsResponse.ok) {
        throw new Error(`Error fetching comments for post ${post.id}: ${commentsResponse.status}`);
      }
      const comments = await commentsResponse.json();
      console.log(`Post: ${post.title}`);
      console.log(`Total Comments: ${comments.length}`);
      console.log("-------------------------");
    }
  } catch (error) {
    console.error("Failed:", error.message);
  }
}
fetchPostsWithComments();





