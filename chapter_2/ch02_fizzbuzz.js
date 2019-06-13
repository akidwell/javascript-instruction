let x = 1;
for (x; x <= 100 ; x++) {
   if (x%3==0 && x%5==0) {
       console.log("Fizzbuzz") 
} 
if (x%3==0) {
    console.log("Fizz") 
} 
if  (x%5==0) {
    console.log("buzz")
}
console.log(x);
}