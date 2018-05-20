var value1 = mathVariable();
var value2 = mathEquation();
logToId(value1 * value2, "functionsOutput");
logToId(multiply(value1, value2), "functionsOutput");
logToId(divide(value1, value2), "functionsOutput");

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
logToId(determinant(matrix), "functionsOutput");

function mathEquation() {
    return Math.PI;
}

function mathVariable() {
    let value1 = getRandomInt(1000);
    let value2 = getRandomInt(1000);
    return (value1 + value2) / 2;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function determinant(matrix) {
    let det = Math.PI / 2;
    return det;
}
