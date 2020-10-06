


// Variable
var m;  // declaring a variable
// console.log(a);  print undefined in the console
m = 7;  // assigning a variable
var n = 2;  // declaring and assigning a variable
// console.log(a);  print 7 in the console


/* Data Types:
undefined, null, boolean, string, symbol, number and object
*/

var myName = "Bob";
myName = 8;

// Note that capitalization of variable name matters, i.e. myName and myname is two different variable
// the naming convention for multiple word variable is firstSecondThird, i.e. capitalize the first letter of every word except the first

let ourName = "Rdfz";

const PI = 3.14;  // set to constant and could not be changed, i.e. read-only; convention for const is all capital letters

/* difference between var and let
1. scoping rules
var are scoped to the function and let are scoped to the block ({})
2. hoisting
var could be access as undefined before assignment but let could not
3. global object (not global variable)
unlike var, let could not create a property on the global object at the top level (let x = 0 but window.x = undefined)
4. redeclaration
var accepts redeclaration but let does not

conclusion: should mainly use let instead of var!
*/


/* Basic operations
+, -, *, /, ++, --, %, +=, -=, *=, /=, \ (escape character)
Math.pow, Math.sqrt, Math.floor, Math.round, Math.max, Math.min
*/

var a = 3 / 2;  // 1.5
a = 2;
a++;  // 3

var x = 2.5;
var y = 2.0;
var z = x * y  // 5 instead of 5.0
y = 2.5;
z = x * y;  // 6.25


// String
// string could be contained in '', "" or `` (the key under ESC)
var myFirstName = 'double quoted "Zaitian"';  // double quoted "Zaitian"
var myFirstName = "double quoted \"Wang\"";  // double quoted "Wang"
var myName = `single quoted 'Zaitian' and double quoted "Wang"`;  // single quoted 'Zaitian' and double quoted "Wang"

/* usage of escape character
\' = ', \" = ", \\ = \, \n = newline, \r = carriage return, \t = tab, \f = form feed
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";  // FirstLine newline tab \SecondLine newline Thirdline

// string could be concatenated/connected with + and +=
var ourStr = "I come first. " + "I come second. ";  // I comd first. I come second.
ourStr += "I come third. ";  // I comd first. I come second. I come third.
var anotherStr = "I come fourth";
ourStr = ourStr + anotherStr + "!";  //  I comd first. I come second. I come third. I come fourth!

// length of string by .length
var strLength = ourStr.length;  // length of ourStr

// get characters from string by [n] (zero based index)
var char = ourStr[0];  // I


// string is immutable
ourStr = "Jello World";
// ourStr[0] = "H"  this would raise an error
ourStr = "Hello World";  // this works

// template literals
var person = {
    name: "Daniel",
    age: 20
}
var greeting = `Hello, my name is ${person.name}.
I am ${person.age} years old`;
// by using `, we could create new line in string and include variable in string using ${var}


// Array
var ourArray = ['John', 23];  // elements of array could be any datatype
ourArray = [['Daniel', 21], true];  // nested array
var myName = ourArray[0][0];  // Daniel

// print array
console.log(ourArray);  // if we try to print a nested array, we would get (2) [Array(2), true] instead of the detailed array
console.log(JSON.stringify(ourArray));  // JSON.stringify(arr) could change arr/object into a print-friendly string

// push() = append() in python
ourArray.push(['Tod', 12]);  // [[Daniel, 21], true, [Tod, 12]]

// pop() = pop() in python
var poped = ourArray.pop();  // [Tod, 12], ourArray = [[Daniel, 21], true]

// shift() = pop(0) in python, poping the first element
var shifted = ourArray.shift();  // [Daniel, 21], ourArray = [true]

// unshift = append(0) in python, pushing the element in the front of array
ourArray.unshift(3);  // [3, true]

// length of array
var len = ourArray.length  // 2


// Function
// scope of function
var myGlobal = 10;  // this variable is global

function ourFunc(x = 0) {  // default value of parameter is defined by adding '= default value'
    // do something here
    myGlobalSecond = 20;  /* if initialization of variable without var inside a function, that variable is set to global 
                            However, try not to do this as it will create a lot of confusion!!!*/
    var myGlobalThird = 30;  // if initialization of variable with var, that variable is respect to that function, i.e. local
}

function ourFuncSecond() {
    if (typeof myGlobal != "undefined") {  // myGlobal is a global variable so type of myGlobal is number
        myGlobal = 50;
    }
    if (typeof myGlobalSecond != "undefined") {  // myGlobalSecond is also a global variable so type of myGlobalSecond is number
        myGlobalSecond = 50;
    }
    if (typeof myGlobalThird != "undefined") {  // myGlobalThird is a local variable of ourFunc so here myGlobalThird variable is undefined
        myGlobalThird = 50;  // is not executed
    }
}

ourFunc();
ourFuncSecond();

function ourFuncThird() {
    var myGlobal = 20;  // create a local variable called myGlobal, which has the same name of a global variable defined earlier
    // console.log(myGlobal)  20 would be printed if this is executed, because local variable will be used if both local and global variable of that name exist 
}

var test = 10;
// return statement
function myFunc() {
    test += 1;  // unlike python, this would actually change the value of the global variable test
    // if no return statement in a function, then undefined is returned
}
// console.log(test) would print 11


// Boolean
// true, false


// Conditional logic and comparison operator
/* comparison operator
==, !=, >, <, >=, <=, === (strict equality operator), !== (strict inequality operator), &&, ||
strict equality operator:
3 == '3' true, because string '3' automatically convert to number and then used to compare
3 === '3' false, because under strict equality operator no automatic covertion would happen
          i.e. different types would be evaluated to false
strict inequality operator:
3 !== '3' false, because 3 and '3' has the same value if converted to number type
3 !== '3' true, because 3 and '3' is in different types
*/

// || (or operator) in value assignment
// if right-hand value is connected with ||, then assign the first value that evaluated true or the last value to left-hand value
// note that 0, null, undefined, empty string, NaN, false all evaluated to false
var lastValue;
var magic = 0 || null || undefined || '' || NaN || false || lastValue;
// the above line assign lastValue to magic regardless of whether lastValue is evaluated true or false as it's the last value

// if statement (same as java)
var boolean = true
var boolean2 = true
if (boolean) {
    // things to execute if boolean is true
} else if (boolean2) {
    // things to execute if boolean is false but boolean2 is true
} else {
    // things to execute if both boolean and boolean2 is false
}


var val = 0
var x = -1
var y = 0
var z = 1
// switch satement
switch (val) {
    case x:
        // things to execute if val === x  // note that switch statement uses === instead of == to determine cases
        break;  // break is needed for each case, otherwise things in the next case would be automatically executed
    case y:
    case z:
        // things to execute if val === y or val === z  
        // this would work because no break statement in case y so things in case z is automatically executed
        break;
    default:  // similar to the else clause in if statement
        // things to do if val is neither x, y nor z
        break;
}


// Object
var ourDog = {
    "name": "Camper",
    "num of legs": 4,
    "num of tail": 1,
    29: [21, 25]
};

// accessing properties
// . (dot notation) for accessing object properties only works if the name has no space in it
// [] (bracket notation) for accessing object properties always works and is required if the name has space in it
var dogName = ourDog.name;  // Camper
var tail = ourDog["num of legs"];  // 4
var number = 29;
ourDog[number] = [21, 25, 26];  // change ourDog.29 to [21, 25, 26]

// adding properties
ourDog.bark = "wolf-wolf";

// deleting properties
delete ourDog.bark;

// checking properties
ourDog.hasOwnProperty(29);  // true

// copying a object
var copy = JSON.parse(JSON.stringify(ourDog));


// Loops (same as java)
// while loop
var i = 0;
var arr = [];
while (i < 5) {
    arr.push(i);
    i++;
}  // arr = [0, 1, 2, 3, 4]

// for loop
for (let j = 13; j >= 5; j -= 2) {
    arr.push(j);
}  // arr = [0, 1, 2, 3, 4, 13, 11, 9, 7, 5]

// do while loop
do {
    // code in this chunk will always run at least one time
} while (i < -10)


// try-catch block
try {
    // do something bad here
} catch (ex) {
    // do something to the exception, such as console.log(ex)
} finally {
    // do something regardless of the exception
}


// Random
Math.random();  // random float from 0 to 1, 1 excluded
Math.floor(Math.random() * 20);  // random integer from 0 to 20, 20 excluded
Math.floor(Math.random() * 4) + 3;  // random integer from 3 to 7, 7 not included

// convert string to integer
parseInt("66");  // 66
parseInt("10011", 2);  // 19, as we inputed radix = 2 so computer treated 10011 as binary number


// Ternary opertor (same in c++)
var test = 1 >= 2 ? 30 : -40;  // since 1 >= 2 is false so -40 is assigned to test

// nested ternary opertor
test = test > 0 ? "positive" : test < 0 ? "negative" : "zero";
// since test > 0 is false, we evalutate test < 0 (which is true) and negative is assigned to test


// Difference between var, let and const
var variable = 0;
var variable = 1;  // this works
let variable2 = 0;
// let variable2 = 1  this does not work
// so using let helps us debug the code

function checkScope() {
    var i = 1;
    let j = 1;
    let k = 1;
    if (true) {
        i = 2;
        j = 2;
        let k = 2;  // note that here we used let again
    }
    // console.log(i);  print 2
    // console.log(j);  print 2, because j is defined in function scope and changed in the if statement
    // console.log(k);  print 1, because the 'let k = 2' statement only valid in the if statement scope
}

checkScope();

// change value of a constant array
const constArr = [1, 2, 3];
// consArr = [4, 5, 6]  this would raise an error
constArr[0] = 4;  // this works and constArr = [4, 2, 3]

// prevent object mutation
const MATH_PI = {
    PI: 3.14
};

MATH_PI.PI = 3.1415;  // this works as it only changes the property of MATH_PI
Object.freeze(MATH_PI);  // this freeze the MATH_PI object and prevent its mutation
// MATH_PI.PI = 3.1415926  this would raise an error


// Arrow function (like the lambda function in python)
const magicFunc = (parameter1, parameter2) => {  // normally use const instead of var
    // this is a function, do something here
}

num => Number.isInteger(num) && num > 0;  // this is a arrow function which take num as input and return if num is a positive integer


// Usage of ...
// passing multiple function parameters using ...
function myTestFunc(...args) {  // ...args is the same as * args in python
    // do something here
}

// spread elements in array using ...
myArr = [1, 2, 3];
myArr2 = myArr;  // this only create a new reference of myArr
myArr2 = [...myArr];  // this create a new array with all of the elements in myArr, i.e. shallow copy


// Destruction in assignment
// destructing variables from object in assignment
// const {property name: assigning variable name} = object, which means take the property from object and assign it to variable
var anObject = { x: 1, y: 2, z: 3 };
var a = anObject.x;
var b = anObject.y;
var c = anObject.z;
// the above three line is the same as
const { x: aa, y: bb, z: cc } = anObject;

var anotherObject = { today: { min: 72, max: 83 }, tomorrow: { min: 69, max: 86 } };
var todayMax = anotherObject.today.max;
// the above line is the same as
const { today: { max = todayMax2 } } = anotherObject;

// destructing variables from array in assignment
var myArr3 = [0, 1, 2, 3, 4, 5, 6];
var u = myArr3[0];
var v = myArr3[2];
var w = myArr3[5];
// the above three line is the same as
const [uu, , vv, , , ww,] = myArr3;

// destruction of array to switch values
[u, v] = [v, u];  // this switches the value of u and v

// use destruction of array to reassign element of array
var list = [1, 2, 3, 4, 5]
const [, , ...myArr4] = list;  // this create a new list called myArr4 of all the elements in list except the first two
// console.log(myArr4);  this would print (3) [3, 4, 5]

// destruction of object in function parameters
function destruction({ x, y }) {  // this function accept a object input with property x and y, other properties would be ignored
    return x + y;
}
destruction(anObject);  // only anObject.x and anObject.y is passed to the destruction function


// Class
class SpaceShuttle {  // define a class using class keyword
    constructor(targetPlanet) {  // constructor() is the same as __init__(self) in python
        this.targetPlanet = targetPlanet;  // use this keyword for itself
    }
}
var zeus = new SpaceShuttle('Jupiter');  // use new keyword for a instance of a class

function makeClass() {
    class Vegetable {
        constructor(name) {
            this._name = name;  // _name is to set name variable private
        }
        get vegeName() {  // a getter
            return this._name
        }
        set vegeName(name) {  // a setter
            this._name = name
        }
    }
    return Vegetable;
}
const Vege = makeClass();  // a class could be returned by a function
const carrot = new Vege('carrot');
const name = carrot.vegeName;  // note that there are no () as vegeName is a property of Vege and this automatically invoke the getter of vegeName
carrot.vegeName = 'another carrot';  // no () for setters as well and we could just use setter as normal property


// Import and export
// import functions and/or variables from file
// import { function name } from path as string
// e.g. import {myFunc} from "./fileName"
// there's no need for .js as it is set by default

// export functions and/or variables
// export { function name } and/or export var foo = 3

// import all exports from a file
// import * as name from path as string

// export single function or variable (fallback export)
// export default function myFunc(x, y) {return x + y;} or export default var x = 0

// import fallback export
// import name from path as string
// note that there isn't {} around the name for importing fallback export





