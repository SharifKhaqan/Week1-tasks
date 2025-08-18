// 1. Safe API Access
// WHAT: Access deeply nested API data (user.profile.avatar.url) safely without errors.
// HOW: Use ?. so if profile or avatar is missing, it returns undefined instead of crashing.
function exampleOptional1() {
  const apiResponse = {
    id: 101,
    name: "Ali",
    profile: {
      // avatar: { url: "https://example.com/avatar.png" }
    }
  };
  const avatarUrl = apiResponse.profile?.avatar?.url || "No avatar available";
  document.body.style.backgroundColor = "#e0f2f1";
  document.body.style.color = "#004d40";
  document.getElementById("title").textContent = "Safe API Access Example";
  document.getElementById("title").style.fontSize = "2rem";
  document.getElementById("output1").textContent =
    "API Response:\n" + JSON.stringify(apiResponse, null, 2) +
    "\n\nAvatar URL (safely accessed):\n" + avatarUrl;
}

// 2. Dynamic Nested Access
// WHAT: Access category.subCategory.subSubCategory.name safely.
// HOW: Use ?. to prevent errors if intermediate objects don’t exist.
function exampleOptional2() {
  const category = {
    id: 1,
    name: "Electronics",
    subCategory: {
      id: 2,
      name: "Mobiles",
      // subSubCategory: { id: 3, name: "Smartphones" }
    }
  };
  const subSubCategoryName = category.subCategory?.subSubCategory?.name || "No Sub-SubCategory";
  document.body.style.backgroundColor = "#f3e5f5";
  document.body.style.color = "#4a148c";
  let title = document.getElementById("title");
  title.textContent = "Dynamic Nested Access Example";
  title.style.fontSize = "2rem";
  document.getElementById("output2").textContent =
    "Category Object:\n" + JSON.stringify(category, null, 2) +
    "\n\nSub-SubCategory Name (safely accessed):\n" + subSubCategoryName;
}

// 3. Safe Function Calls
// WHAT: Call a function only if it exists (user.getSettings?.()).
// HOW: ?.() ensures no error if getSettings is missing.
function exampleOptional3() {
  const user = {
    id: 201,
    name: "Sara",
    getSettings: () => ({ theme: "dark", notifications: true })
  };
  const settings = user.getSettings?.() || "No settings available";
  document.body.style.backgroundColor = "#fff3e0";
  document.body.style.color = "#e65100";
  let title = document.getElementById("title");
  title.textContent = "Safe Function Calls Example";
  title.style.fontSize = "2rem";
  document.getElementById("output3").textContent =
    "User Object:\n" + JSON.stringify(user, null, 2) +
    "\n\nSettings (safely called):\n" + JSON.stringify(settings, null, 2);
}

// 4. Fallback Defaults
// WHAT: Access order.customer.address.city safely, with a fallback.
// HOW: ?. ensures no crash, and || gives a default value if missing.
function exampleOptional4() {
  const order = {
    id: 501,
    product: "Laptop",
    customer: {
      name: "Ahmed",
      // address: { city: "Karachi", zip: "75000" }
    }
  };
  const city = order.customer?.address?.city || "Unknown";
  document.body.style.backgroundColor = "#e8f5e9";
  document.body.style.color = "#1b5e20";
  let title = document.getElementById("title");
  title.textContent = "Fallback Defaults Example";
  title.style.fontSize = "2rem";
  document.getElementById("output4").textContent =
    "Order Object:\n" + JSON.stringify(order, null, 2) +
    "\n\nCustomer City (with fallback):\n" + city;
}

// 5. Accessing Arrays Safely
// WHAT: Get first employee’s name without errors if employees array is empty.
// HOW: ?.[] checks safely at each level.
function exampleOptional5() {
  const company = {
    name: "TechCorp",
    employees: [
      // { firstName: "Hassan", lastName: "Raza" }
    ]
  };
  const firstEmployeeName = company.employees?.[0]?.firstName || "No employees found";
  document.body.style.backgroundColor = "#e3f2fd";
  document.body.style.color = "#0d47a1";
  let title = document.getElementById("title");
  title.textContent = "Accessing Arrays Safely Example";
  title.style.fontSize = "2rem";
  document.getElementById("output5").textContent =
    "Company Object:\n" + JSON.stringify(company, null, 2) +
    "\n\nFirst Employee Name (safely accessed):\n" + firstEmployeeName;
}

// 6. Chained Optional Calls
// WHAT: Call api.getUser?.()?.details?.email safely.
// HOW: First check if getUser exists, then call it, then access email.
function exampleOptional6() {
  const api = {
    // getUser: () => ({
    //   id: 1,
    //   name: "Zara",
    //   details: { email: "zara@example.com" }
    // })
  };
  const email = api.getUser?.()?.details?.email || "No email available";
  document.body.style.backgroundColor = "#fbe9e7";
  document.body.style.color = "#bf360c";
  let title = document.getElementById("title");
  title.textContent = "Chained Optional Calls Example";
  title.style.fontSize = "2rem";
  document.getElementById("output6").textContent =
    "API Object:\n" + JSON.stringify(api, null, 2) +
    "\n\nUser Email (safely accessed):\n" + email;
}

// 7. Event Object Access
// WHAT: Access event.target.dataset.id safely.
// HOW: event?.target?.dataset?.id ensures no crash if event or dataset is missing.
function exampleOptional7(event){
  const btn = document.getElementById("eventBtn");
  btn.dataset.id = "12345";
  const eventId = event?.target?.dataset?.id || "No ID available";
  document.body.style.backgroundColor = "#f1f8e9";
  document.body.style.color = "#33691e";
  let title = document.getElementById("title");
  title.textContent = "Event Object Access Example";
  title.style.fontSize = "2rem";
  document.getElementById("output7").textContent =
    "Button Element:\n" + btn.outerHTML +
    "\n\nSafely Accessed dataset.id:\n" + eventId;
}

// 8. Optional Chaining with Map
// WHAT: Safely get Map size without error if myMap is undefined.
// HOW: myMap?.size returns undefined instead of crashing.
function exampleOptional8() {
  const myMap = new Map([["a", 1], ["b", 2]]);
  // let myMap;
  const mapSize = myMap?.size || "Map is undefined";
  document.body.style.backgroundColor = "#f3e5f5";
  document.body.style.color = "#4a148c";
  let title = document.getElementById("title");
  title.textContent = "Optional Chaining with Map Example";
  title.style.fontSize = "2rem";
  document.getElementById("output8").textContent =
    "myMap value:\n" + String(myMap) +
    "\n\nMap Size (safely accessed):\n" + mapSize;
}

// 9. Safe Iteration
// WHAT: Loop over user.friendsList safely using ?.map.
// HOW: If friendsList doesn’t exist, fallback to a default message.
function exampleOptional9() {
  // const user = { friendsList: ["Ali", "Sara", "John"] };
  let user = {};
  const friends = user.friendsList?.map(friend => `Friend: ${friend}`) || ["No friends list available"];
  document.body.style.backgroundColor = "#e8f5e9";
  document.body.style.color = "#1b5e20";
  let title = document.getElementById("title9");
  title.textContent = "Safe Iteration with Optional Chaining Example";
  title.style.fontSize = "2rem";
  document.getElementById("output9").textContent =
    "user object:\n" + JSON.stringify(user, null, 2) +
    "\n\nFriends List (safely iterated):\n" + friends.join("\n");
}

// 10. Exam Score Access
// WHAT: Access student.exam.score safely.
// HOW: Use ?. to avoid errors, ?? to return "Not Available" if missing.
function exampleOptional10() {
  const student = {
    name: "Ali",
    // exam: { score: 85 }
  };
  const score = student.exam?.score ?? "Not Available";
  document.body.style.backgroundColor = "#fff3e0";
  document.body.style.color = "#e65100";
  let title = document.getElementById("title");
  title.textContent = "Optional Chaining with Exam Score Example";
  title.style.fontSize = "2rem";
  document.getElementById("output10").textContent =
    "Student Object:\n" + JSON.stringify(student, null, 2) +
    "\n\nExam Score (safely accessed):\n" + score;
}
