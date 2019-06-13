const square = function(x) {
    return (x * x);
}

const makeNoise = function() {
    console.log("pling")
}

const power = function(base, exponent) {
    let result = 1;
    for (let count= 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(square(7));
makeNoise();
console.log(power(2, 10));

//pg 43
let x= 10;
if (true) {
    let y= 20
    var z=30
    console.log(x+y+z);
}
console.log( x+z);
// y, since it has let keyword, is only availble in the function
// if you have y in that last line, it won't work





