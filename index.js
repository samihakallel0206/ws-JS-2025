// alert("Bonjour JS!");
// ***************!Logging output & Console
//  alert("Hello World"); //  Do not use for debugging. Stops the script!
// console.log("bonjour je suis la ");
// console.error("This is an error");
// console.warn("This is a warning");
// console.log(prompt("age"));

//***********************!-Variable

// var name = "student";
// console.log(name);
// var name = "instructor";
// console.log(name);

// const name = "someone";
// const age = 99;
// console.log(age);
// var can be re-assigned, const can not
// name = "someone2";
// age = 100;
// console.log(age);

//*****************************************!Data types

// var name = "a";
// console.log(typeof name);
// var age = 260;
// console.log(typeof age);
// var tallness = 1.75;
// console.log(typeof tallness);

// var isPerson = false;
// console.log(typeof isPerson);
// var x = null;
// console.log(typeof x);
// var z;
// console.log(typeof z);

//**************************!Arthmetic Operators
// + , - , * , / , % , ++ , -- , **

// console.log(13 - 2);
// console.log("3" * "2");
// console.log(typeof "3");
// console.log(3 * "TEXT");
// console.log("10" / "2");
// console.log(10 % 2);
// console.log(10 % 3);
// console.log("3" ** "2"); //puissance

// console.log(5 + 3);
// console.log(5 + "a"); //concatenation

// var y = 5;
// console.log(++y);
// console.log(y)
// console.log(y++);
// console.log(y);
// var z;
// z = ++y;
// console.log(z);
// console.log(y);

//******************!Comparaison operators
// = affectation d'une vvaleur à une variable

// == comparer les valeur des variables

// === comparer valeurs et types variables

// / ! le contraire (opposite)

// /!= comparer l'inégalité des valeurs

// /!== compares the inequality based on value and type

// var a = 25;
// var b = "25";
// console.log(typeof a);
// console.log(typeof b);
// if (a !== b) {
//   console.log(a + " equal: value and type " + b);
// } else {
//   console.log("not equal in type or value");
// }
// if (a != b) {
//   console.log("equal ");
// } else {
//   console.log("not equal");
// }

//****************************!Truthy & Falsy
// false, undefined, null, 0, "", NaN

// var test = null;
// var title = "";
// var y;
// console.log(typeof y);
// var a = 0;
// console.log(test);
// console.log(Boolean(test));
// console.log(Boolean(title));
// console.log(Boolean(y));
// console.log(Boolean(a));
// if (test) {
//   console.log('okay')
// } else {
//   console.log(' not okay')
// }

// ***********************************!logical Operators
// ********** X && Y :and
// Returns first value if falsy
// console.log(null && 5);
// console.log(5 && 1);

// ********** X || Y :OR
// Returns first value if truthy
// console.log(1 || 0);

//***************!String concatenation
// var name = "hamza";
// var age = 20;

// Archaic method
// console.log("My name is " + name + "\n" + "and I am " + age);
// Template literal (use this one!)
// console.log(`My name is ${name}
//     and I am
//      ${2 + 3}`);

//Special Characters (\, \', \n, \\)

// console.log("je m'appelle sam");

//******!String methods & properties **** */
// var s = "Hello World";
// var val;
// console.log(val);
// console.log(typeof val);

// Get length
// val = s.length;
// console.log(s.length);
// console.log(val);

// String Index
// console.log(s[0])

// Change case
// val = s.toUpperCase()
// console.log(val)
// val = s.toLowerCase()
// console.log(val)

// // Get sub string
// val = s.substring(0, 5)
// console.log(val)

// Split into array
// val = s.split('') //result array
// console.log(val)
// val=[1,4,5]
// val = val.join('')// array ----> string
// console.log(val)

// console.log(s)
// console.log(val)

//*****************!Switch (/!\break)    */
// var color = "red";
// switch (color) {
//   case "red":
//     console.log("color is red");
//   break;
//   case "blue":
//     console.log("color is blue");
//   break;
//   case "yellow":
//     console.log("color is yellow");
//     break;
//   default:
//     console.log("color is neither red nor blue");
// }
// reproducing the conditional with if else
// if (color === "red") {
//   console.log("color is red");
// } else if (color === "blue") {
//   console.log("color is blue");
// } else {
//   console.log("color is neither red nor blue");
// }

// ************!FUNCTIONS (as a type)
// function dummyFunc() {}
// // Check type
// console.log(typeof dummyFunc)

//************      Functions       */
// function greeting(n) {
//   return 'Hello, my name is ' + n
// }
// console.log(greeting('Nissrine'))
// console.log(greeting('Wissem'))
// console.log(greeting(5))

// function sub(g, h) {
//   return g - h;
// }
// console.log(sub(4, 3));
// console.log(sub(600, 326587));
// console.log(sub(y, x));

// function add(g, h) {
//   return g + h;
// }
// console.log(add("4", "3"));

// declaration of array
// var tab = [];
// console.log(tab);
// console.log(typeof tab);

//************* */ Conditionals
// **** Simple If/Else Statement
// const x = "10";

// if (x === 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than 10");
// }

//*********************!!loops
// ********************** For
// for (var i = 1; i <= 10; i++) {
//   console.log("For Loop Number: " + i);
// }

// var tab = [1, "p", "hello"];
// // for (var i = 0; i <= tab.length - 1; i++) {
// for (var i = tab.length - 1; i >= 0; i--) {
//   console.log(tab[i]);
// }
/*    for ... of   */
// for (var el of tab) {
//   ///value ou elment
//   console.log(el);
// }
// /*       for ... in       */
// for (var i in tab) {
//   // index
//   console.log(i);
//   console.log(tab[i]);
// }
//*********************!While
// var l = 3
// while (l < 5) {
//   console.log('hola')
//   l++
// }
// var i = 1
// do {
//   console.log(`Do While Loop Number: ${i}`)
//   i++
// } while (i <= 10)

// ************!ARRAYS - Store multiple values in a variable
// var numbers = [1, 2, 3, 4, 5];
// var fruits = ['apples', 'oranges', 'pears', 'grapes'];
// var hobbies = ["sleep", 33, true];

// console.log(numbers);
// console.log(fruits);
// console.log(hobbies);
// console.log(typeof numbers);
// *** Tables
// const numbers = [1,2,3]
// console.log(numbers);
// Still an assignment ! (with a new table)
// numbers = [2,3]

// numbers[1] = 'hello'

// console.log(numbers)

//********************! Array Methods & Properties

// const colors = ['black', 'white', 'red', 'blue']
// console.log(colors)

// Get length
// console.log(colors.length)

// Get one value (!: Arrays start at 0)
// console.log(colors[3])
// Add value using push()
// colors.push('yellow')
// console.log(colors);
// // Add to beginning
// colors.unshift('purple')
// console.log(colors);

// // Remove last value
// colors.pop()
// console.log(colors);

// // Remove first value
// colors.shift()
// console.log(colors);

// // Check if array
// console.log(Array.isArray(colors))

// // Get index
// console.log(colors.indexOf(''))

// console.log(colors)

// **********************!Loop Through Arrays
// Array of objects
// const numbers = [22, 55, 66];
// // // ********************** For Loop
// for (var i = 0; i < numbers.length; i++) {
// console.log(numbers[i]);
// }

// // // ********************** For...of Loop
// for (var x of numbers) {
// console.log(x);
// }

// // // ********************** For...in Loop

// for (var i in numbers) {
// console.log(numbers[i]);

// }

// ************! OBJECTS LITERALS
// const person = {
// name: "Eve",
// age: 5000,
// isPerson: true,
// hobbies: ["eating", "sleeping"]
// };

// console.log(person);
// console.log(person.name);

//****************************!Object Literals
// const person = { // an object is a collection of key-value pairS
// firstName: 'Adam',
// age: 30,
// hobbies: ['music', 'movies', 'sports'],
// address: {
// street: '66 Main st',
// city: 'wtvr',
// state: 'over there'
// }
// };

// Get single value (obj.key)
// console.log(person.firstName)
// console.log(person.address.street)
// Add property
// person.email = 'adam@gmail.com';
// person.hobbies.push('singing');
// console.log(person);

// const Mutability
// *** Objects
// const person = {
// name: 'foulan',
// age:27,
// adresse:'tunis'}
// console.log(person);
// // Change a property
// person.name = 'mohamed'
// console.log(person);

// // // delete a property
// delete(person.age)
// console.log(person);

// // Add a property
// person.email = 'm@gmail.com';
// console.log(person)

// ************ /!\ Array of objects
// const users = [
// {
// name: 'person',
// age: 23,
// email: "p1@gmail.com",
// },
// {
// name: 'person 2',
// age: 31,
// email: "p2@gmail.com",
// },
// {
// name: 'person 3',
// age: 155,
// email: "p3@gmail.com",
// }
// ];

// console.table(users)
// console.log(users);
