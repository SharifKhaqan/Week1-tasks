// 1.Write a function greet(name, callback) that greets the user after calling the callback.
function greet(name, callback) {
    callback();
    console.log("Hello, " + name + "!");
}
function sayWelcome() {
    console.log("Welcome to our website!");
}
greet("Muhammad Sharif Khaqan", sayWelcome);

// 2.Create a loadData(callback) function that simulates loading data and then calls a callback.
function loadData(callback) {
    console.log("Loading data...");
    setTimeout(() => {
        let data = { id: 1, name: "John Doe" }; 
        console.log("Data loaded!");

        
        callback(data);
    }, 2000); 
}
loadData(function(result) {
    console.log("Callback received data:", result);
});

// 3.Build a calculate(a, b, callback) that performs a calculation (add, sub, etc.) via callback.
function calculate(a, b, callback) {
    return callback(a, b);
}
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
console.log(calculate(5, 3, add));        
console.log(calculate(5, 3, subtract));   
console.log(calculate(5, 3, multiply));   
console.log(calculate(6, 3, divide));     

// 4.Create a timer function that accepts a callback and calls it after 3 seconds using setTimeout
function timer(callback) {
    setTimeout(() => {
        callback(); 
    }, 3000); 
}
timer(function() {
    console.log("3 seconds have passed!");
});

// 5.Implement a forEachCustom(arr, callback) to replicate the behavior of forEach.
function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
let numbers = [10, 20, 30];
forEachCustom(numbers, function(value, index, array) {
    console.log(`Value: ${value}, Index: ${index}, Full Array: ${array}`);
});

// 6.Create a downloadFile(url, onSuccess, onError) simulation using callbacks.
function downloadFile(url, onSuccess, onError) {
    console.log("Starting download from:", url);
    setTimeout(function () {
        let isDownloadSuccessful = Math.random() > 0.5; 
        if (isDownloadSuccessful) {
            
            onSuccess("File downloaded successfully from " + url);
        } else {
            onError("Failed to download file from " + url);
        }
    }, 2000); 
}
downloadFile(
    "https://example.com/file.zip",
    function (successMessage) {
        console.log("SUCCESS:", successMessage);
    },
    function (errorMessage) {
        console.log("ERROR:", errorMessage);
    }
);

// 7.Write a function that filters an array of numbers using a callback condition.
function filterNumbers(numbers, callback) {
    let result = [];
    for (let num of numbers) {
        if (callback(num)) { 
            result.push(num);
        }
    }
    return result;
}
let number = [1, 5, 8, 12, 3, 18, 7];
let filtered = filterNumbers(number, function(n) {
    return n > 7;
});
console.log(filtered); 

// 8.Build a logger function that receives a formatter callback to display messages.
function logger(message, formatter) {
    console.log(formatter(message)); 
}
function upperCaseFormatter(msg) {
    return msg.toUpperCase();
}
function lowerCaseFormatter(msg) {
    return msg.toLowerCase();
}
logger("Hello World", upperCaseFormatter); 
logger("Hello World", lowerCaseFormatter); 


// 9.Create a performTask(taskName, callback) function that logs the task and calls the callback when done.
function performTask(taskName, callback) {
    console.log(`Starting task: ${taskName}`);
    setTimeout(function () {
        console.log(`Task "${taskName}" completed.`);
        callback();
    }, 2000);
}
performTask("Clean the room", function () {
    console.log("Now you can rest!");
});

// 10.Write a function that checks a password and uses a callback to handle the result
function checkPassword(inputPassword, correctPassword, callback) {
    callback(inputPassword === correctPassword);
}
function displayResult(isCorrect) {
    if (isCorrect) {
        console.log("Access granted. Welcome!");
    } else {
        console.log("Access denied. Incorrect password.");
    }
}
checkPassword("mypassword123", "mypassword123", displayResult); 
checkPassword("wrongpass", "mypassword123", displayResult);     







