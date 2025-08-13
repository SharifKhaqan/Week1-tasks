// 1. API Response Parsing
// WHAT: Extract firstName, email, and city from a nested API response in one destructuring operation.
// HOW: Drill down into nested objects inside 'apiResponse' directly within the destructuring statement.
const apiResponse = {
  user: {
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28
    },
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890"
    },
    preferences: {
      theme: "dark",
      notifications: true
    },
    location: {
      city: "New York",
      country: "USA"
    }
  },
  status: "success"
};
const {
  user: {
    profile: { firstName },
    contact: { email },
    location: { city }
  }
} = apiResponse;
console.log(firstName);
console.log(email);
console.log(city);

// 2. Dynamic Module Imports
// WHAT: Import only 'validate' and 'format' functions from a module and rename them during import.
// HOW: Use dynamic 'import()' with destructuring to pick specific functions and rename using the colon syntax.
(async () => {
  const {
    validate: checkData,
    format: prettyFormat
  } = await import('./utils.mjs');
  checkData("user info");
  prettyFormat("hello world");
})();

// 3. Redux State Extraction
// WHAT: Extract userId and token from auth, and theme from settings in a Redux store object.
// HOW: Destructure nested properties directly from the store object in a single statement.
const store = {
  auth: {
    userId: "user_12345",
    token: "abc123xyz",
    isAuthenticated: true
  },
  settings: {
    theme: "dark",
    language: "en",
    notifications: true
  },
  data: {
    posts: [],
    comments: []
  }
};
const {
  auth: { userId, token },
  settings: { theme }
} = store;
console.log(userId);
console.log(token);
console.log(theme);

// 4. Function Parameters
// WHAT: Destructure deeply nested config values directly inside the function parameter list.
// HOW: Use object destructuring in the parameter definition so values are unpacked as soon as the function is called.
const chartProps = {
  data: [10, 20, 30],
  config: {
    axis: {
      xLabel: "Months",
      yLabel: "Sales"
    },
    style: {
      color: "blue",
      fontSize: 14
    }
  },
  options: {
    responsive: true
  }
};
function renderChart({
  data,
  config: {
    axis: { xLabel, yLabel },
    style: { color, fontSize }
  },
  options
}) {
  console.log("Data:", data);
  console.log("X Axis Label:", xLabel);
  console.log("Y Axis Label:", yLabel);
  console.log("Chart Color:", color);
  console.log("Font Size:", fontSize);
  console.log("Options:", options);
}
renderChart(chartProps);

// 5. Destructuring with Defaults
// WHAT: Extract values with defaults when keys might be missing in an API config.
// HOW: Assign default values in destructuring so undefined keys are replaced automatically.
const apiConfig = {
  theme: "dark"
};
const { itemsPerPage = 10, appTheme = "light" } = apiConfig;
console.log(itemsPerPage);
console.log(appTheme);

// 6. Array of Objects
// WHAT: Get first product's name and second product's price from an array of objects.
// HOW: Use array destructuring to pick objects, then object destructuring inside to extract properties.
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 500 }
];
const [{ name: firstProductName }, { price: secondProductPrice }] = products;
console.log(firstProductName);
console.log(secondProductPrice);

// 7. Multiple Return Values
// WHAT: Extract posts and likes from an array returned by a function, ignoring followers.
// HOW: Use commas to skip unwanted elements during array destructuring.
function getUserStats() {
  return [120, 450, 900];
}
const [posts, , likes] = getUserStats();
console.log(posts);
console.log(likes);

// 8. Swapping Variables
// WHAT: Swap two variables without using a temporary variable.
// HOW: Use array destructuring assignment to switch their positions instantly.
let startDate = "2025-08-01";
let endDate = "2025-08-13";
console.log("Before swap:", startDate, endDate);
[startDate, endDate] = [endDate, startDate];
console.log("After swap:", startDate, endDate);

// 9. Merging API Data
// WHAT: Combine user data from one API and settings data from another into a single object with renamed keys.
// HOW: Destructure each API response, rename properties during destructuring, then merge them into a new object.
const apiResponse1 = {
  user: {
    name: "Ali Khan",
    email: "ali@example.com"
  }
};
const apiResponse2 = {
  settings: {
    theme: "dark",
    notifications: true
  }
};
const {
  user: { name: userName, email: userEmail }
} = apiResponse1;
const {
  settings: { theme: preferredTheme, notifications: notificationsEnabled }
} = apiResponse2;
const mergedData = {
  userName,
  userEmail,
  preferredTheme,
  notificationsEnabled
};
console.log(mergedData);

// 10. Nested Array/Objects in GraphQL Response
// WHAT: Extract the first post's title and author's name from a nested GraphQL response.
// HOW: Destructure into the data object, pick the first post in posts array, then unpack title and author's name.
const graphqlData = {
  data: {
    posts: [
      {
        title: "Mastering GraphQL",
        author: { name: "John Doe", email: "john@example.com" }
      },
      {
        title: "JavaScript Deep Dive",
        author: { name: "Jane Smith", email: "jane@example.com" }
      }
    ]
  }
};
const {
  data: {
    posts: [
      { title: firstPostTitle, author: { name: firstAuthorName } }
    ]
  }
} = graphqlData;
console.log(firstPostTitle);
console.log(firstAuthorName);
