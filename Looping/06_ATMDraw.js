
const prompt = require('prompt-sync')();  // Importing prompt-sync for user input

const correctPIN = "1234";  // Correct PIN stored in the system
let enteredPIN = "";
let attempts = 0;
const maxAttempts = 3;

console.log("Welcome to the ATM!");

do{

    enteredPIN = prompt("Enter your 4-digit PIN: ");
    attempts++;

    if (enteredPIN === correctPIN) {
        console.log("Access granted. You can now perform transactions.");
        break;
    } else if (attempts < maxAttempts) {
        console.log("Incorrect PIN. Please try again.");
    } else {
        console.log("Account locked. Too many incorrect attempts.");
    }

}while (enteredPIN !== correctPIN && attempts < maxAttempts);
            