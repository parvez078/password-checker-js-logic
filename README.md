# password-checker-js-logic
A secure password validation script with a limited attempt system (3 attempts) built using JavaScript loops.
markdown
# 🔐 Password Checker with Attempt Limit (JavaScript)

This repository features a simple but powerful **Password Validation Logic** built with JavaScript. It demonstrates how to use loops and conditional statements to create a secure input system with a maximum of 3 attempts.

## 🌟 Overview
In real-world applications, security is key. This program mimics a basic login screen where a user must enter the correct password. If the user fails 3 times, the system automatically locks the access.

## 🚀 How it Works
1. **Initial Setup:** A predefined password is set in the code (e.g., `"parvez"`).
2. **The Loop:** We use a `do...while` loop to ensure the user is asked for a password at least once.
3. **Condition Check:** 
   - If the password is correct, the loop breaks and access is granted.
   - If the password is wrong, the attempt count increases.
4. **Limit Reached:** After 3 failed attempts, the program terminates with a "Limit Exceeded" message.

## 🛠️ Code Snippet
```javascript
let password = "parvez";
let attempts = 3;
let i = 1;

do {
    let userpass = prompt(`Enter Password (Attempt ${i}):`);
    if (userpass === password) {
        console.log("Access Granted!");
        break;
    } else {
        console.log("Wrong password. Try again.");
        if (i === attempts) console.log("Limit Reached!");
        i++;
    }
} while (i <= attempts);


💻 How to Run
Open any web browser (Chrome, Edge, or Safari).
Press F12 to open Developer Tools.
Go to the Console tab.
Copy the code from index.js and paste it there.
Watch the logic in action!
📚 What I Learned
Control Flow: Using if-else for decision making.
Loops: Implementing do...while for repeated tasks.
Break Statements: How to exit a loop early when a condition is met.
Variable Management: Tracking user attempts dynamically.
🏷️ Keywords
JavaScript Password Validation
JS Loops Tutorial
Beginner Programming Projects
Logic Building in JavaScript
Interactive JS Scripts

