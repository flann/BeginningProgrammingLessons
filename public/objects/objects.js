/**
 * Print to a string with LFs
 */
function prt2Str(str, bufferString) {
    bufferString += str + '\n';
}

function funWithObjects() {
    var objectOutput = document.getElementById('objectOutput')
    logToDiv("A simple object: ", objectOutput);
    logToDiv("&nbsp;", objectOutput);
    var objStr = `var simpleObject = {
    firstName: 'Fred',
    lastName: 'Flintstone',
    greeting: function(div) {
        logToDiv("Hello, my name is " + this.firstName + " " + this.lastName + ".", div);
    }
};
`;
    logToDiv(objStr, objectOutput);
    logToDiv("&nbsp;", objectOutput);
    logToDiv("Call the object's greeting:", objectOutput);
    logToDiv("&nbsp;", objectOutput);
    logToDiv("simpleObject.greeting(objectOutput);", objectOutput);
    eval(objStr);
    simpleObject.greeting(objectOutput);
    logToDiv("&nbsp;", objectOutput);

    logToDiv("An object creating using prototype: ", objectOutput);
    logToDiv("&nbsp;", objectOutput);

    objStr = `function MyObject(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

MyObject.prototype.greeting = function(div) {
    logToDiv("Hello, my name is " + this.firstName + " " + this.lastName + ".", div);
}

// Create an instance
var myObj = new MyObject("Martin", "Blank");

// Call the new instance's greeting
myObj.greeting(objectOutput);
`;

    logToDiv(objStr, objectOutput);
    eval(objStr);

    logToDiv("&nbsp;", objectOutput);
    logToDiv("The same object using the ECMAScript 6 class definition: ", objectOutput);
    logToDiv("&nbsp;", objectOutput);

    objStr = `class MyClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(div) {
        logToDiv("Hello, my name is " + this.firstName + " " + this.lastName + ".", div);
    }
}

// Create an instance
var myObj = new MyClass("Martin", "Blank");

// Call the new instance's greeting
myObj.greeting(objectOutput);

// See the console to see what the class looks like. Notice that it has a prototype,
// so the "class" is just syntactic sugar.
console.dir(MyClass);

`;

    logToDiv(objStr, objectOutput);
    eval(objStr);

}
