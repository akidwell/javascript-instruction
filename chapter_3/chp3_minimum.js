function minimum (a, b) {
    if (a > b) {
        return b;
    } else if ( a == b) {
        return "these numbers are equal";
    }
    else {
        return a;
    }
}
console.log(minimum(50,100));
