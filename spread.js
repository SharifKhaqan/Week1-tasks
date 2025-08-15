// 1:Merging Configurations – Merge a default config object with a user-provided config, where user config should override defaults
// What: We have a default config and a user config, and we want a final config combining both
// How: Using the spread operator, userConfig values overwrite defaultConfig
function example1() {
  const defaultConfig = {
    backgroundColor: "#3498db",
    textColor: "#fff",
    fontSize: "2rem",
    message: "Welcome with Default Config!",
  };
  const userConfig = {
    backgroundColor: "#2ecc71",
    fontSize: "3rem",
    message: "Customized by User!",
  };
  const finalConfig = { ...defaultConfig, ...userConfig }; 
  document.body.style.backgroundColor = finalConfig.backgroundColor;
  document.body.style.color = finalConfig.textColor;
  const titleElement = document.getElementById("title");
  titleElement.textContent = finalConfig.message;
  titleElement.style.fontSize = finalConfig.fontSize;
  document.getElementById("output1").textContent = JSON.stringify(finalConfig, null, 2);
}

// 2:Cloning Deeply Nested Objects – Clone a nested settings object but override only one key (theme) using spread
// What: We want to clone a nested object and change only one nested property
// How: Spread operator is used at each level to create a new object without mutating the original
function example2() {
    const settings = {
    user: {
      name: "Ali",
      preferences: { theme: "light", notifications: true }
    },
    version: 1
  };
  const updatedSettings = {
    ...settings,
    user: {
      ...settings.user,
      preferences: {
        ...settings.user.preferences,
        theme: "dark"
      }
    }
  };
  document.body.style.backgroundColor = "#f4f4f4";
  document.body.style.color = "#333";
  document.getElementById("title").textContent = "Nested Object Clone";
  document.getElementById("title").style.fontSize = "2rem";
  document.getElementById("output2").textContent =
    "Original:\n" + JSON.stringify(settings, null, 2) +
    "\n\nUpdated:\n" + JSON.stringify(updatedSettings, null, 2);
}

// 3:Combining Arrays from Multiple Sources – Combine frontendTeam and backendTeam arrays into one fullTeam without mutating original
// What: Combine two arrays into a new array
// How: Spread operator is used to concatenate arrays without mutating originals
function example3() {
  const frontendTeam = ["Alice", "Bob", "Charlie"];
  const backendTeam = ["David", "Eva", "Frank"];
  const fullTeam = [...frontendTeam, ...backendTeam];
  document.body.style.backgroundColor = "#fff8e1";
  document.body.style.color = "#333";
  document.getElementById("title").textContent = "Combined Team Members";
  document.getElementById("title").style.fontSize = "2rem";
  document.getElementById("output3").textContent =
    "Frontend Team:\n" + JSON.stringify(frontendTeam, null, 2) +
    "\n\nBackend Team:\n" + JSON.stringify(backendTeam, null, 2) +
    "\n\nFull Team:\n" + JSON.stringify(fullTeam, null, 2);
}

// 4: Filtering and Rest Parameters – Destructure title and collect the rest properties
// What: Separate one property and group all others into another object
// How: Destructuring with rest operator
function example4() {
    const blogPost = {
    title: "Mastering JavaScript ES6",
    author: "Ali Khan",
    category: "Programming",
    published: "2025-08-13",
    views: 1500
  };
  const { title, ...restProperties } = blogPost;
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "#000";
  document.getElementById("title").textContent = "Filtering with Rest Example";
  document.getElementById("title").style.fontSize = "2rem";
  document.getElementById("output4").textContent =
    "Title: " + title + "\n\nOther Properties:\n" +
    JSON.stringify(restProperties, null, 2);
}

// 5:Dynamic Function Arguments – Function takes any number of arguments and formats them
// What: Accept multiple arguments dynamically
// How: Use rest parameters (...messages) and join them into a string
function example5() {
    function logMessage(...messages) {
    return messages.join(" | "); 
  }
  const result = logMessage("Error", "File not found", "Please check the path");
  document.body.style.backgroundColor = "#e8f5e9";
  document.body.style.color = "#2e7d32";
  document.getElementById("title").textContent = "Dynamic Function Arguments Example";
  document.getElementById("title").style.fontSize = "2rem";
  document.getElementById("output5").textContent = result;
}

// 6:Removing Specific Keys – Remove password and token while keeping others using rest
// What: Remove sensitive keys from object
// How: Destructure unwanted keys and collect rest into safeUser
function example6() {
    const user = {
    name: "John Doe",
    email: "john@example.com",
    password: "secret123",
    token: "abc123xyz",
    age: 30,
    country: "USA"
  };
  const { password, token, ...safeUser } = user;
  document.body.style.backgroundColor = "#fff3e0";
  document.body.style.color = "#e65100";
  document.getElementById("title").textContent = "Removing Specific Keys Example";
  document.getElementById("title").style.fontSize = "2rem";
  document.getElementById("output6").textContent =
    "Original User:\n" + JSON.stringify(user, null, 2) +
    "\n\nSafe User (without password & token):\n" + JSON.stringify(safeUser, null, 2);
}

// 7:Immutable Array Updates – Insert a new element into an array without mutating original
// What: Add element in array at specific position without changing original
// How: Use slice and spread operator to create a new array
function example7() {
    const originalArray = [10, 20, 30, 40];
    const position = 2; 
    const newElement = 25;
    const updatedArray = [
    ...originalArray.slice(0, position),
    newElement,
    ...originalArray.slice(position)
  ];
  document.body.style.backgroundColor = "#e3f2fd";
  document.body.style.color = "#0d47a1";
  document.getElementById("title").textContent = "Immutable Array Update Example";
  document.getElementById("title").style.fontSize = "2rem";
  document.getElementById("output7").textContent =
    "Original Array:\n" + JSON.stringify(originalArray, null, 2) +
    "\n\nUpdated Array:\n" + JSON.stringify(updatedArray, null, 2);
}

// 8:Conditional Merging – Merge two objects but include only truthy properties from the second
// What: Merge obj1 and obj2, include only truthy values from obj2
// How: Object.entries + filter(Boolean) + Object.fromEntries + spread
function example8() {
    const obj1 = { name: "Ali", age: 25, city: "Lahore" };
    const obj2 = { name: "", age: 30, city: null, country: "Pakistan" };
    const merged = { 
    ...obj1, 
    ...Object.fromEntries(
      Object.entries(obj2).filter(([_, value]) => Boolean(value))
    )
  };
  document.body.style.backgroundColor = "#f3e5f5";
  document.body.style.color = "#4a148c";
  document.getElementById("title").textContent = "Conditional Merging Example";
  document.getElementById("title").style.fontSize = "2rem";

  document.getElementById("output8").textContent =
    "Object 1:\n" + JSON.stringify(obj1, null, 2) +
    "\n\nObject 2:\n" + JSON.stringify(obj2, null, 2) +
    "\n\nMerged Object (only truthy from Object 2 included):\n" + JSON.stringify(merged, null, 2);
}

// 9:Reordering Arguments – Destructure specific keys and spread rest into another object
// What: Take object options, separate some keys, keep rest together
// How: Destructure url & method, spread rest into new config
function example9() {
   const options = {
    url: "https://api.example.com/data",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    timeout: 5000,
    cache: "no-cache"
  };
  const { url, method, ...otherOptions } = options;
  const apiCallConfig = {
    endpoint: url,
    requestMethod: method,
    ...otherOptions
  };
  document.body.style.backgroundColor = "#e0f7fa";
  document.body.style.color = "#006064";
  document.getElementById("title").textContent = "Reordering Arguments Example";
  document.getElementById("title").style.fontSize = "2rem";
  document.getElementById("output9").textContent =
    "Original Options:\n" + JSON.stringify(options, null, 2) +
    "\n\nReordered API Call Config:\n" + JSON.stringify(apiCallConfig, null, 2);
}

// 10:Update Nested Employee's Salary – Use spread to update nested object without mutation
// What: Update emp2 salary in nested employees object
// How: Spread at each level to create a new object, override salary
function example10() {
   const company = {
    name: "TechCorp",
    employees: {
      emp1: { name: "Alice", salary: 50000 },
      emp2: { name: "Bob", salary: 60000 },
      emp3: { name: "Charlie", salary: 55000 }
    }
  };
  const updatedCompany = {
    ...company,
    employees: {
      ...company.employees,
      emp2: {
        ...company.employees.emp2,
        salary: 65000
      }
    }
  };
  document.body.style.backgroundColor = "#f1f8e9";
  document.body.style.color = "#33691e";
  document.getElementById("title").textContent = "Nested Employee Salary Update Example";
  document.getElementById("title").style.fontSize = "2rem";
  document.getElementById("output10").textContent =
    "Original Company:\n" + JSON.stringify(company, null, 2) +
    "\n\nUpdated Company (emp2 salary updated):\n" + JSON.stringify(updatedCompany, null, 2);
}
