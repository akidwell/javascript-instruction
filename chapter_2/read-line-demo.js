const readline = require('readline-sync');

let name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");

let nbrString = readline.question("Enter a number: ")
let nbr = Number(nbrString);
console.log(nbr*2);

let fl = readline.questionFloat("enter a float: ")
console.log("float : " + fl);

let int1 = readline.questionInt("enter a number: ")
console.log("number " + int1) //truncates decimals

