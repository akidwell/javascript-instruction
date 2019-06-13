const readline = require('readline-sync');

let size = readline.questionInt("chess board size? ");
let lines = "";
//rows
for (let i = 1; i<=size; i++) {
  //columns
  for (let n = 1; n<= size; n++) {
  if ((i+n)%2==0) {
    lines += "#";
  } else 
  {
    lines += " ";
  }
}
lines+="\n";
}
console.log(lines);



//8 size board only:
// let lines = "";

// for (let i = 1; i<=8; i++) {
//   for (let n = 1; n<= 4; n++) {
//   if (i%2==0) {
//     lines += "# ";
//   } else 
//   {
//     lines += " #";
//   }
// }
// lines+="\n";
// }
// console.log(lines);


//original:
// let size = 20;
// let board = "";

// for (y = 0; y < size; y++) {  
//   for (x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0)
//       board += " ";
//     else
//       board += "#";
//   }
//   board += "\n";
// }

// console.log(board);


