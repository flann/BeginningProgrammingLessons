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
var a1 = matrix[0][0];
var b2 = matrix[1][1];
var c3 = matrix[2][2];

logToId(a1 * b2 * c3, "functionsOutput");
logToId(matrix[2][0], "functionsOutput");

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
    let a1 = matrix[0][0];
    let a2 = 0; // ?
    let a3 = 0; // ?
    let b2 = matrix[1][1];
    let c3 = matrix[2][2];
    // ...

    let det = a1 * b2 * c3; // - ...
    return det;
}
