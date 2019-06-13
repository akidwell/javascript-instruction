let arr1 = [2,4,6,8, 10]; //creating first array with elements
// let arr1 = [2,4,6,8]; validating both even and odd numbers in the array
let arr2 = []; //initalizing empty array outside of for loop

//i is the index,
for (let i = (arr1.length-1); i >= 0; i--) {
    arr2.push(arr1[i]);
}
 console.log("array1:  " + arr1);
 console.log("array 2:  " + arr2);


console.log("\n reverse array in place");
for (let i=0; i< arr1.length/2 ; i++) {
    let a = arr1[i];
    let end = (arr1.length-1)-i;
    let b = arr1[end];
    arr1[i]=b;
    arr1[end]=a;
}
console.log("reveresed arr1: " + arr1);