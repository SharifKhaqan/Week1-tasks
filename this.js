// 1. Create an object with a method using a regular function, and log this. Observe what it refers to.
// WHY: Regular functions used as object methods have `this` bound to the object itself.
// USE CASE: Useful when you want methods to operate on their owning object’s properties.
let user = {
    name: "Muhammad Sharif Khaqan",
    age: 22,
    showthis: function () {
        console.log(this);  
    }
};
user.showthis();


// 2. Convert the method to an arrow function, and log this. What changed?
// WHY: Arrow functions don’t have their own `this`; they inherit it from the surrounding scope.
// USE CASE: Avoid using arrow functions as methods if you rely on `this` referring to the object.
const person = {
    name: "Ali",
    greet: () => {
        console.log(this);  
    }
};
person.greet();


// 3. Create a constructor function, use both regular and arrow functions inside it. See how this behaves.
// WHY: Regular functions have `this` bound to the created instance; arrow functions inherit `this` lexically.
// USE CASE: Use regular functions as methods when `this` should depend on the call site, arrow functions when you want to fix `this` to the creation context.
function Student(name) {
    this.name = name;
    this.sayName = function () {
        console.log("Regular function:", this.name);
    };
    this.sayNameArrow = () => {
        console.log("Arrow function:", this.name);
    };
}
const person1 = new Student("Ali");
person1.sayName();       
person1.sayNameArrow();  
const regularFn = person1.sayName;
const arrowFn = person1.sayNameArrow;
regularFn();  
arrowFn();    


// 4. Use an arrow function inside setTimeout() within an object method, and log this
// WHY: Arrow functions inside callbacks inherit `this` from the method’s scope, preserving object context.
// USE CASE: Handy for asynchronous callbacks that need access to the object's properties.
const greet = {
    name: "Sharif",
    greetLater: function () {
        console.log("greetLater called, waiting 2 seconds...");
        setTimeout(() => {
            console.log("Hello,", this.name);  
        }, 2000);
    }
};
greet.greetLater();


// 5. Create a class with a method using arrow function. Compare with a method using regular function.
// WHY: Regular methods depend on how they are called for `this`; arrow functions fix `this` to the instance.
// USE CASE: Arrow methods useful to prevent losing `this` when passing methods as callbacks.
class Designer {
    fullName = "Ayesha";
    showNameRegular() {
        console.log("Regular:", this.fullName);
    }
    showNameArrow = () => {
        console.log("Arrow:", this.fullName);
    };
}
const graphic = new Designer();
graphic.showNameRegular(); 
graphic.showNameArrow();
const regularCopy = graphic.showNameRegular;
const arrowCopy = graphic.showNameArrow;
arrowCopy();     
regularCopy();   


// 6. Create a class to compare how regular and arrow functions handle this in direct calls and inside event callbacks.
// WHY: Regular functions in callbacks lose `this`; arrow functions inherit `this` lexically.
// USE CASE: Arrow functions prevent losing `this` in asynchronous callbacks like setTimeout.
class Alarm {
    message = "Wake up!";
    startAlarmRegular() {
        console.log("Regular:", this.message);
    }
    startAlarmArrow = () => {
        console.log("Arrow:", this.message);
    };
    triggerEvent() {
        console.log("Event started...");
        setTimeout(function () {
            console.log("Regular in event:", this.message);  
        }, 1000);
        setTimeout(() => {
            console.log("Arrow in event:", this.message);    
        }, 1000);
    }
}
const myAlarm = new Alarm();
myAlarm.startAlarmRegular();
myAlarm.startAlarmArrow();
myAlarm.triggerEvent();


// 7. Use this inside a forEach() callback with both arrow and regular functions inside a method.
// WHY: Regular functions in callbacks have own `this` (usually undefined/global); arrow callbacks inherit `this`.
// USE CASE: Use arrow functions in callbacks when you want to access outer `this`.
class Person {
    name = "Ali";
    showNamesRegular() {
        const names = ["Ali", "Ahmed", "Sara"];
        names.forEach(function (name) {
            console.log("Regular:", name, "| this.name =", this.name);  
        });
    }
    showNamesArrow() {
        const names = ["Ali", "Ahmed", "Sara"];
        names.forEach((name) => {
            console.log("Arrow:", name, "| this.name =", this.name);  
        });
    }
}
const person2 = new Person();
person2.showNamesRegular();
person2.showNamesArrow();


// 8. Simulate a delayed log inside a class using both a regular function and an arrow function to compare how this behaves.
// WHY: Regular function inside setTimeout loses `this`; arrow function keeps `this` lexically.
// USE CASE: Use arrow function in async callbacks to access class instance properties.
class TestThis {
    name = "Ali";
    delayedRegular() {
        setTimeout(function () {
            console.log("Regular:", this.name);  
        }, 1000);
    }
    delayedArrow() {
        setTimeout(() => {
            console.log("Arrow:", this.name);    
        }, 1000);
    }
}
const obj = new TestThis();
obj.delayedRegular();
obj.delayedArrow();


// 9. Declare variables with var, let, and const directly in the global scope. Log this and check which variables become properties of the global object.
// WHY: `var` globals attach to global object; `let` and `const` do not.
// USE CASE: Understand variable scope and avoid polluting global scope.
var a = 10;
let b = 20;
const c = 30;
console.log(this.a);  
console.log(this.b);  
console.log(this.c);  
console.log(a);       
console.log(b);       
console.log(c);       


// 10. Create a function where you declare a variable using var, another using let, and another using const. Log them along with this inside the function to see which variables are attached to this in non–strict mode.
// WHY: Variables declared inside functions do NOT attach to `this` even with `var`.
// USE CASE: Understand scope and the difference between variable declarations.
function testThis() {
    var x = 1;
    let y = 2;
    const z = 3;
    console.log("Inside function:");
    console.log("this.x =", this.x); 
    console.log("this.y =", this.y); 
    console.log("this.z =", this.z); 
    console.log("Variables:");
    console.log("x =", x);  
    console.log("y =", y);  
    console.log("z =", z);  
}
testThis();
