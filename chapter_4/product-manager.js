let javaBook = {
    code : "java",
    description: "Murach's java programming",
    price : 57.50
};
console.log("code" in javaBook);
console.log("test" in javaBook);
console.log(Object.keys(javaBook));
let mysqlBook = {
    code : "mysql",
    description: "Murach's MySQL",
    price : 55
};

let books = [javaBook, mysqlBook];
console.log(books);

for ( let i = 0; i< books.length; i++) {
    console.log(books[i]);

console.log("enhanced for loop:");
for (let book of books) {
console.log(books);
}
}

//---------------------------------

//mutability

// let obj1 = {value: 10};
// let obj2 = obj1;
// let obj3 = {value: 10};
// console.log(obj1==obj2);
// console.log(obj1==obj3);

// obj1.value=15;
// console.log(obj2.value);
// console.log(obj3.value);
//--------------------------

// //pg 65
// const score = {visitors : 0, home : 1};
// console.log(score);
// score.visitors = 1;
// console.log(score);
// //this is not allowed, due to score in constant
// score = { visitors : 1, home:1}
// console.log(score);
