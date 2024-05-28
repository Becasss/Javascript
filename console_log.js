//console.log is used to log (print) a message to the console//
// console.log("Apna College")  

console.log("Bkash Yamhu Rai");
console.log("Hello world!");
fullName = "bikash Yamphu Rai";
console.log("fullName");

// null and undefined
a = null;
y = undefined;
console.log(a);
console.log(y);


// Boolean Variables - either "True" or "False"
isfollow = true;

console.log(isfollow);



//  JavaScript is a dynamically typed language:

fullName = 25;
console.log(fullName);


// "=" is assignment operator in JavaScript

// variables Rules
// variables names are case sensitive: 'a' and "A" are two different things.
// Only letters, digits, underscore(_) and $ is allowed. (not even space)
// Only a letter, underscore(_) or $ should be 1st character.
// Reserved words cannot be variable names.




//fullName = "camel case"

// full_name = "snakecase"

// full-name = "Kebabcase "

// FullName = "Pascal case"







// let, const & var

// var: variable can be re-declared & updated. A global scope varaible.
// let: Variable cannot be re-declared but can be updated. A block scope variable.
// const: variable cannot be re-declared or updated. A block scope variable.



// Using let variables
let name = "Bikash";
console.log(name);
let agee = 24;
let totalPrice = 1000;
console.log(agee);
console.log(totalPrice);



// using var variables

var aage = 24;
var firstName = "BIkash Yampphu Rai";
console.log(aage);
console.log(fullName);




// using const variables
const age = 25;
console.log(age);



// Data types In JS

// Number, String, Boolean, Undefined, Null, BigInt, Symbol are also called primitive data type



let x = BigInt(23343343242)
console.log(x);






// Objects: collection of values syntax: {key:"value"}

const student = {
    name: "BIkash",
    age: 25,
    school: "Mount olive school",
    GPA: 3.0,
    isPass: true
};
console.log(student);
console.log(student.name);
student["age"]= student["age"] + 1;
console.log(student['age']);

student["name"] = "Shirjana Shrestha"
console.log(student["name"]);



// let's practice:
// (Q). Create a const object called "product" to store information shown in the picture.
const product = {
    title: 'Ball Pen',
    rating: 4,
    offer: 5,
    price: 270
};
console.log(product);



// (Q). Create a const object called "profile" to store information shown in the picture.
const profile = {
    userName: "Bikash Yamphu Rai",
    isFollow: false,
    followers: 123,
    following: 123
};
console.log(profile);
