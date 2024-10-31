// Question 1.1
//Declare variables of each JavaScript primitive data type and log their types to the console.
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined;
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myNull);
console.log(typeof myUndefined);


// Question 1.2
// Function to check if a variable is a string or number
function checkType(value) {
    if (typeof value === "string") {
        console.log(`variable is a string`);
    } else if (typeof value === "number" && !isNaN(value)) {
        console.log(`variable is a string`);
    } else {
        console.log(`variable is neither a string nor a number`);
    }
}

checkType("Hello");
checkType(42);
checkType(NaN);
checkType(true);
checkType(undefined);
checkType(null);

// Question 1.3
//Q3: Create a function that takes a parameter and returns "This is a string" if the parameter is a string, otherwise returns "Not a string". 
function checkIfString(value) {
    if (typeof value === "string") {
        return "This is a string";
    } else {
        return "Not a string";
    }
}

console.log(checkIfString("Hello"));
console.log(checkIfString(42));
console.log(checkIfString(true));
console.log(checkIfString({}));
console.log(checkIfString("123"));

//   Question 1.4
//Q4: Given a variable, identify if it’s null or undefined without using typeof.
function checkNullOrUndefined(value) {
    if (value === null) {
        return "This is null";
    } else if (value === undefined) {
        return "This is undefined";
    } else {
        return "This is neither null nor undefined";
    }
}

// Test cases
console.log(checkNullOrUndefined(null));
console.log(checkNullOrUndefined(undefined));
console.log(checkNullOrUndefined(0));
console.log(checkNullOrUndefined(""));




//Question 2.1
//Write an arrow function to return the square of a number. 
const square = (num) => num * num;

//Quetion 2.2
//Create an arrow function that checks if a number is even or odd and returns “Even” or “Odd.”
const checkEvenOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

//Question 2.3
//Write an arrow function to filter an array of numbers, keeping only even numbers. 
const filterEven = (arr) => arr.filter(num => num % 2 === 0);

//Question 2.4
//Modify the previous function to accept any filtering function and apply it to an array of numbers.
const filterNumbers = (arr, filterFunc) => arr.filter(filterFunc);


//Question 2.5
//Convert this traditional function to an arrow function and simplify it as much as possible:


const add = (a, b) => a + b;


//Question 3.1
//Create an object with properties name, age, and isStudent, and log it to the console. 
const person = {
    name: "Ayomide",
    age: 25,
    isStudent: true,
};

console.log(person);


//Question 3.2
//Add a method to your object that logs a greeting message using its name property. 
const individual = {
    name: "Ayomide",
    age: 25,
    isStudent: true,
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    },
};

individual.greet();

//Question 3.3
//Write a function that takes an object and returns all of its keys as an array. 
const getObjectKeys = (obj) => Object.keys(obj);

console.log(getObjectKeys(person));

//Question 3.4
//Modify the function to return an array of key-value pairs for each property.
const getKeyValuePairs = (obj) => Object.entries(obj);

console.log(getKeyValuePairs(person));

//Question 3.5
//Given an object, write a function to clone it without using JSON methods or external libraries.

const cloneObject = (obj) => {
    const clone = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = obj[key];
        }
    }
    return clone;
};
const clonedPerson = cloneObject(person);
console.log(clonedPerson);

//Question 4.1
// Create an array of three favorite fruits and log the second fruit
const fruits = ["Mango", "Apple", "Banana"];
console.log(fruits[1]);

//Question 4.2
//Write a function that takes an array and returns the last element.
function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log(getLastElement([1, 2, 3, 4]));  // Output: 4
console.log(getLastElement(["a", "b", "c"]));  // Output: c

//Question 4.3
//Modify the previous function to remove and return the last element from the array.
function popLastElement(arr) {
    return arr.pop();
}
const numbers = [1, 2, 3, 4];
console.log(popLastElement(numbers));
console.log(numbers);

//Questio 4.4
//Write a function that accepts two arrays and returns an array containing only unique elements.
function getUniqueElements(arr1, arr2) {
    const combined = [...arr1, ...arr2];
    return [...new Set(combined)];
}

// Test case
console.log(getUniqueElements([1, 2, 3], [3, 4, 5]));
console.log(getUniqueElements(["apple", "banana"], ["banana", "mango"]));

//Question 4.5
//Use array methods to sort an array of objects by a specific property (e.g., age) in descending order

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

// Sort by age in descending order
people.sort((a, b) => b.age - a.age);

console.log(people);

//Question 5.1
//Convert the number 42 to a string and log the result
const logType = (variable) => {
    const type = typeof variable;
    if (type === "function") {
        console.log("Function");
    } else if (type === "object" && variable !== null) {
        console.log("Object");
    } else {
        console.log("Primitive");
    }
};

// Example usage:
logType(42);         // Primitive
logType({});         // Object
logType(() => { });   // Function
logType(null);       // Object

//Question 5.2
//Write a function that takes a boolean value and returns "true" or "false" as strings. 
const getTypeOfElements = (arr) => arr.map(element => typeof element);

console.log(getTypeOfElements([1, "hello", true]));
// ["number", "string", "boolean"]

//Question 5.3
//Create a function that converts a stringified number into an integer and checks if it’s greater than 10. 
const getTypeOfElement = (arr) => arr.map(element => typeof element);
console.log(getTypeOfElement([1, "hello", true]));

//Question 5.4
//Write a function that converts a mixed array of strings and numbers to all numbers
const countTypes = (arr) => {
    const typeCount = {};
    arr.forEach(element => {
        const type = typeof element;
        typeCount[type] = (typeCount[type] || 0) + 1;
    });
    return typeCount;
};
console.log(countTypes([1, "hello", true, 2, {}, null, undefined, () => { }]));

//Question 5.5
//Implement a function that takes any value and converts it into a boolean. (Hint: Think about Falsy and Truthy values in JavaScript.)


const validateObjectTypes = (obj, expectedTypes) => {
    for (const key in expectedTypes) {
        if (typeof obj[key] !== expectedTypes[key]) {
            return false;
        }
    }
    return true;
};

// Example usage:
const being = { name: "John", age: 30, isStudent: false };
const expectedTypes = { name: "string", age: "number", isStudent: "boolean" };

console.log(validateObjectTypes(being, expectedTypes)); // true

const invalidPerson = { name: "John", age: "30", isStudent: false };
console.log(validateObjectTypes(invalidPerson, expectedTypes));

//Question 6.1
//Declare a variable of each data type and log typeof for each.
const num = 42;
const numAsString = num.toString(); // or String(num)
console.log(numAsString);  // "42"
console.log(typeof numAsString);  // "string"

//Question 6.2
//Write a function that takes any variable and logs whether it’s a function, object, or primitive data type.
const booleanToString = (bool) => bool ? "true" : "false";
console.log(booleanToString(true));
console.log(booleanToString(false));

//Question 6.3
//Write a function that returns the type of each element in an array (e.g., [1, "hello", true] should return ["number", "string", "boolean"]).
const isGreaterThanTen = (strNum) => {
    const num = parseInt(strNum, 10);
    return num > 10;
};
console.log(isGreaterThanTen("15"));
console.log(isGreaterThanTen("5"));

//Question 6.4
//Modify the previous function to return a count of each type in an array.
const convertToNumbers = (arr) => arr.map(item => Number(item));
console.log(convertToNumbers(["1", 2, "3", 4]));

//Question 6.5
//Create a function that uses typeof to validate an object’s property types against an expected type list.
const toBoolean = (value) => !!value;
console.log(toBoolean(0));
console.log(toBoolean(1));
console.log(toBoolean("Hello"));
console.log(toBoolean(null));
console.log(toBoolean(undefined));

//Question 7.1
//Write a try-catch block that handles a division by zero error.
const divide = (a, b) => {
    try {
        if (b === 0) throw new Error("Division by zero is not allowed.");
        console.log(a / b);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

divide(10, 2);
divide(10, 0);

//Question 7.2
//Write code that intentionally throws an error if an input is not a number.
const checkIfNumber = (input) => {
    if (typeof input !== 'number') {
        throw new TypeError("Input must be a number.");
    }
    console.log("Valid number:", input);
};
try {
    checkIfNumber(42);
    checkIfNumber("abc");
} catch (error) {
    console.log("Caught Error:", error.message);
}

//Question 7.3
// Create a function that uses try, catch, and finally to parse a JSON string. If it fails, log an error message.
const parseJson = (jsonString) => {
    try {
        const result = JSON.parse(jsonString);
        console.log("Parsed JSON:", result);
    } catch (error) {
        console.log("Invalid JSON:", error.message);
    } finally {
        console.log("Parsing attempt finished.");
    }
};

parseJson('{"name": "John", "age": 30}');
parseJson('Invalid JSON string');

//Question 7.4
//Write a function that accepts a number and throws a custom error if the number is negative, then catches the error and logs a message. 
const checkPositiveNumber = (num) => {
    try {
        if (num < 0) throw new RangeError("Number cannot be negative.");
        console.log("Valid number:", num);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

checkPositiveNumber(10);
checkPositiveNumber(-5);

//Question 7.5
//Create a function that runs multiple error-prone tasks, catching errors as they occur, and logs each error’s type and message.


const performTasks = () => {
    try {
        console.log("Task 1: Division");
        const result = 10 / 0;
        console.log("Task 1 result:", result);

        console.log("Task 2: Invalid JSON");
        JSON.parse("{invalidJson}");
    } catch (error) {
        console.log(`Error (${error.name}): ${error.message}`);
    } finally {
        console.log("All tasks completed (whether successful or not).");
    }
};
performTasks();

//Question 8.1
//Enable strict mode and try assigning to an undeclared variable.
"use strict";
try {
    undeclaredVar = 42; 
} catch (error) {
    console.log("Error:", error.message);
};

//Question 8.2
//Create a function that runs with strict mode and attempts to assign a value to a const variable.
function strictConstAssignment() {
    "use strict";
    const PI = 3.14;
    try {
      PI = 3.1415;
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
    strictConstAssignment(); 

//Question 8.3
//Write code in strict mode that tries to delete a variable and observe the error.
"use strict";
try {
  let name = "John";
  delete name; 
} catch (error) {
  console.log("Error:", error.message);
};

//Question 8.4
// Define a function in strict mode that receives two parameters, and try to assign values directly to the arguments object.
function modifyArguments(a, b) {
    "use strict";
    try {
      arguments[0] = 42;  // Attempt to modify arguments
      console.log(a);      // a remains unchanged
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
  modifyArguments(10, 20); 

  //Question 8.5
  //Write a function that works in strict mode and uses this. Explain what happens when the function is called normally and as a method.



  function strictThisExample() {
    "use strict";
    console.log(this); 
  }
    strictThisExample();
  
  const obj = {
    method: strictThisExample,
  };
  obj.method(); 
  


  //Question 9.1
  //
//   Here are five reserved words in JavaScript:

// break
// case
// class
// const
// function
// Reserved words cannot be used as variable names, function names, or identifiers.


//Question 9.2
//Try using let or const as variable names and observe the error message.
// try {
//     let = 5; // This will throw a SyntaxError
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
  
//   try {
//     const = 10; // This will also throw a SyntaxError
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
  
//Question 9.3
//Explain why certain words like for and while are reserved and cannot be used as identifiers
//Explaining why certain words like for and while are reserved and cannot be used as identifiers.
//Certain words like for, while, if, else, and return are reserved because they have special meanings and roles in the JavaScript language syntax. They are part of the control flow and structure of the code, defining how code executes and how decisions are made. 

//Question 9.4
//Write a function that checks if a string is a reserved word in JavaScript and returns true or false
const reservedWords = [
    "break", "case", "class", "const", "continue",
    "debugger", "default", "delete", "do", "else",
    "export", "extends", "finally", "for", "function",
    "if", "import", "in", "instanceof", "new",
    "return", "super", "switch", "this", "throw",
    "try", "typeof", "var", "void", "while", "with"
  ];
  
  const isReservedWord = (word) => reservedWords.includes(word);
  
  // Example usage:
  console.log(isReservedWord("for"));      
  console.log(isReservedWord("hello")); 

//Question 9.5
//Create a script that uses an object to store reserved words as keys and test if a word is reserved by accessing its key in the object.
const reservedWordsObj = {
    break: true,
    case: true,
    class: true,
    const: true,
    continue: true,
    debugger: true,
    default: true,
    delete: true,
    do: true,
    else: true,
    export: true,
    extends: true,
    finally: true,
    for: true,
    function: true,
    if: true,
    import: true,
    in: true,
    instanceof: true,
    new: true,
    return: true,
    super: true,
    switch: true,
    this: true,
    throw: true,
    try: true,
    typeof: true,
    var: true,
    void: true,
    while: true,
    with: true,
  };
  
  const checkReservedWord = (word) => reservedWordsObj[word] === true;
  
  // Example usage:
  console.log(checkReservedWord("class"));   
  console.log(checkReservedWord("variable")); 








