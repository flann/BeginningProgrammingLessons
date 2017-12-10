/**
 * Print to a string with LFs
 */
function prt2Str(str, bufferString) {
    bufferString += str + '\n';
}

function funWithObjects() {
    var objectOutput = document.getElementById('objectOutput')
    var objStr = `var simpleObject = {
    firstName: 'Fred',
    lastName: 'Flintstone',
    greeting: function(div) {
        logToDiv("Hello, my name is " + this.firstName + " " + this.lastName + ".", div);
    }
};
`;
    logToDiv(objStr, objectOutput);
    logToDiv("Call the object's greeting:", objectOutput);
    eval(objStr);
    simpleObject.greeting(objectOutput);
}
