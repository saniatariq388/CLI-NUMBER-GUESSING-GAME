#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate aramdom number
// 2) user input for guessing number
//compare user input with computer generated number and show the result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to  number guessing game");
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number  between 1 - 10:",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation,you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
