// Functions in JavaScript
// Block of code that performs a specific task, can be invoked whenever needed




/* function Definition           
function functionName(){           
//do some work
}



functionName(Para1, para2, ...){
    //do some work
}   */



/* Function Call
 functionName();
 */



function myfunction() {
    console.log("I am BIkash Yamphu Rai");
    console.log("I am learning JS");
}

myfunction();



// minimize  redundancy --- repeat 



function myfun(msg) { // parameter --> Input
    console.log(msg);
}
myfun("I Lovs JS"); // argument





// Function sum of two numbers

function sum(a, b) {
    // Local variables (a,b) -> scope
    console.log(a + b);
}



// return 
function sum(a, b) {
    return a + b;
}
let val = sum(3, 6);
console.log(val);





// parameters are like local variables of functions------exist only inside block scope


// sum function
function sum(x, y) {
    return x + y;
}
let s= sum(5, 9);
console.log(s);





// Arrow Functions
// Compact way of writing a function


/* const funtionName = (Param1, param2, ....) => {
    // do some work
}   */

// FOr example :  Arrow Function


function sum(a, b) {
    return a + b;
}
const arrowSum = (a, b) => {
    console.log(a + b);
}

const arrowMul = (a, b) => {
    console.log(a * b);
}




const printHello = () => {
    console.log("Hello");
};




// Let's Practice
// (Q1). Create a function using the "funtion" keyword that takes a String as an argument & returns the number of vowel in the string.

function countVowels(str) {
    let count = 0;
    for (const char of str) {
    
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}






// forEach Loop in Arrays
// arr.forEach(callBackFunction) : Here, it is a function to execute for each element in the array
//  A callback is a function passed as an argument to another function.

let array = [1, 2, 3, 4, 5];

array.forEach(function printVal(val){ // value at each index
    console.log(val);
})


array.forEach((val) => {
    console.log(val);
});


let arr = ['Kathmandu', 'Biratnager', "Bhaktapur"];

arr.forEach((value, item, array) => {
    console.log(value.toUpperCase(), item, array);
});




// Highr Ordr Function  / Method
//either take another Function  as Parameter or Function Return



// (Q). For a given array of numbers, print the square of each value using the forEachp loop;

let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num * num); // num**2
});


// Nxt way:
let calcSquare = (num) => {
    console.log(num * num);
}
nums.forEach(calcSquare);





// Some More Array Methods
// Map() method -- creates a new array with the result of some operations. The value its callback returns are used form new array
// syntax: arr.map(callbackFnx(value, index, array))

 let newArr = nums.map((val) => {
    return val;
 });
console.log(newArr);




// Filter Method:
// creates a new array elements that give true for a condition/filter.

let evenArr = nums.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);




// Reduce Method:
// Perform some operations & reduce the array to a single value. It returns that single values.

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
);
console.log(sumWithInitial);



// find the largest among the numbers in array using reduce method
let arrr = [23, 12, 34, 56, 7, 77];

const output = arrr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);




// Let's Practice
// (Q). We are given array marks of students. Filter out of the marks students that scored 90;

let marks = [97, 5, 99, 87, 45, 65];
let topper = marks.filter((value) => {
    return value > 90;
});
console.log(topper);





// (Q2). Take a number n as input form user. Create an array of numbeers form 1 to n. Use the reduce method
// to calculate sum of all numbers in the array. Use the redce method to calcuate product of all numbers in the array.

let n = prompt("Enter a number: ");

let aarr = [];
for (let i = 1; i <= n; i++){
    aarr[i - 1] = i;
}
console.log(aarr);

let suum = aarr.reduce((res, curr) => {
    return res + curr;
});
console.log("sum =",suum);


let factorial = aarr.reduce((res, curr) => {
    return res * curr;
});
console.log("facotrial = ", factorial);


