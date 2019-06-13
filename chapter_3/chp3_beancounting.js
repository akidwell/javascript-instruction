const readline = require('readline-sync');
//count the number of b's and return
// function countBs(theWord) {
//     let c = 0;
//     for (let i = 0; i < theWord.length; i++) {
//         if (theWord[i] == "b") {
//             c++;
//         }
//     }
//     return c;
// }
// let userWord = readline.question("What is your word?");
// console.log(countBs(userWord));


function countChar(theWord, letterToCount) {
    let c = 0;
    for (let i = 0; i < theWord.length; i++) {
        if (theWord[i] == letterToCount) {
            c++;
        }
    }
    return c;
}
let userWord = readline.question("What is your word?");
let letterToCount = readline.question("What letter do you want to count?")
console.log(countChar(userWord, letterToCount));