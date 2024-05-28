// comments
console.log('Hello world');
// This is comment

/* This is multiple line comments
so here we can write long comments*/




//operators in JS
// Used to perform some operation on data


// Arithmetic Operators:
// Addition(+), subtraction(-), multiplication(*), divider(/),  modulous(%), Exponentiation(**),Increment(++), decrement(--): 


let a = 6;
let b = 7;
console.log("a+b = ", a + b);
console.log("a-b = ",b - a);
console.log("a*b=",a * b);
console.log("a%b=", a % b);



// Unary operator
console.log("a = ", a, "b =", b);
a++;
console.log("a ++ =", a)


// post increment (a++)
// pre increment (++a)


console.log(++a);
console.log(a++);




// Assignment Operators
// equal to (=), (+=), (-=), 


a += 4; // a = a + 4;
console.log('a=', a);



// Comparison Operators
// Equal to (==), euat & type (===), not equal to (!=) and Not equal to '!=='

console.log('5==5', a == b); // false
console.log('5!=5', a != b);




// Logical Operators
// Logical AND (&&), Logical OR (||) and Logical NOT(!)


let y = 6;
let z = 5;

let cond1 = a > b;// true
let cond2 = a == b;//true
console.log("cond1 && cond2 =", cond1 && cond2);






// conditional Statements
// if Statement


let age = 26;
if (age > 18) {
    console.log("You can vote");
}


if (age < 18) { console.log("You CANNOT vote"); }


let mode = "dark";
let color;

if (mode === "dark") {
    color = "black"; 
    
}

if (mode === 'light') {
    color = "light";
    
} console.log(color);






// if-else Statements

let mum = "white";
let colur;

if (mum === "dark") {
    colur = "black"
}
else {
    colur = 'white'
}
console.log(colur);





// Example- 1:
let agee = 35;
if (agee >= 18) {
    console.log("vote");
}
else {
    console.log('Not vote');
}



// even or odd:
let num = 10;
if (num % 2 === 0) {
    console.log("even");
    
} else {
    console.log("odd");
}





// else-if Statements
// Example:

let more = "dark";
let coler;

if (more === 'dark') {
    coler = 'dark';
}
else if (more === 'blue') {
    coler = 'blue';
} else if (more === 'pink') {
    coler = 'pinnk'
} else {
    coler = 'white';
}
console.log(coler);





// example
let aGe = 25;
let result = aGe >= 19 ? "adult" : "not adult";  // simpler, copact if-else
console.log(result);



// MDN Web Docs




// Switch Statements

const expr = "Papayas";
switch (expr) {
    case 'Oranges':
        console.log("Orange are 50.59 a pound.");
        break;
    case "Papayas":
    case "mangoes":
        console.log("Mangoes and papayas are 52.79 a pound.");
        break;
    default:
        console.log(`sorry, we are out of ${exper}`);

}




// alert()

alert("Bikash Yamphu rai"); // one time pop up

// prompt():
prompt("What is your Name?");



// Practice Questions:
// (Q). Get user to input a number using prompt ("Enter a number:"). Checkif the number is a multiple of 5 or not.
let nums = prompt("enter a number:");
if (nums % 5 === 0) {
    console.log(nums,"number is multiple of 5");
}
else {
    console.log(nums, 'Number is Not muliple of 5.');
}





// Let's Practice:
// (Q). Write a code which can give grades to students according to their scores:

let scores = 85;

if (scores >= 90 && scores <= 100) {
    console.log("Your grage is A");
    
} else if (scores >= 70 && scores<= 89) {
    console.log("Your grade is B");
}
else if (scores >= 60 && scores <= 69) {
    console.log("Your grade is C");

} else if (scores >= 50 && scores <= 59)  {
    console.log("Your grade is D")
} else {
    console.log("Your grade is F");
}