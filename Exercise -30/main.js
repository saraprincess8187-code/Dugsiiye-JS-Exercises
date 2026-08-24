function operate(a, b, callback) {
    return callback(a, b)
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition:", operate(2, 3, add));
console.log("Substract:", operate(2, 3, substract));
console.log("Multiply:", operate(2, 5, multiply));
console.log("Division:", operate(10, 2, divide))