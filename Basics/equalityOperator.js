const prompt = require("prompt-sync")();

const age = 18;

if (age === 18) console.log("You are an adult :)");

const userAge = Number(prompt("Enter your age: "));

if (userAge > 18) {
  console.log("Over 18");
} else if (userAge < 18) {
  console.log("Under 18");
}
