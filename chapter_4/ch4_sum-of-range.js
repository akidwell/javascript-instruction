let listOfNumbers = [];

function range(start, end) {   
    for (let i = start; i <= end; i++){
    listOfNumbers.push(i);
    }
    return listOfNumbers;
    }
console.log(range(1,10));


function sumOfArray() {
    let sum = 0;
    for (n =0; n < listOfNumbers.length; n++) {
        sum += listOfNumbers[n];
    }
return sum;
}
console.log(sumOfArray());


