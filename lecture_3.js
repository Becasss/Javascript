//  Loops in JS
// Loops are used to execute a piece of code again & again


// for loop
for (let i = 1; i <= 5; i++){
    console.log("Apna College");
}
console.log("loop has ended.");




// calculate sum of 1 to 10:

let sum = 0;
for (let i = 1; i <= 10; i++){
    sum += i;
}
console.log("sum is = ", sum);
console.log("loop has ended")



//print 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("i=", i);
}


// Loops in JS
// Infinite Loop: A loop that neveer ends



// While Loop
let i = 1;
while (i <= 5) {
    console.log("Bikash Yamphu Rai");
    i++;
}
console.log('Loop has ended.');




// do while loop
let j = 20;
do {
    console.log("Bikash Yampphu rai")
    j++;
} while (j <= 10);


// for-of Loop

/* styntax: for(let val of strVar){
    do some work
}*/



let str = "BIkash Yamphu Rai";
let size = 0;
for (let i of str) {
    //iterator  ----> characters
    console.log("i=", i);
    size++;
}
console.log("string size = ", size);



// for-in Loop
let student = {
    name: "Bikash",
    age: 27,
    cgpa: 7.5,
    isPass : true,
};

for (let key in student) {
    console.log("key=", key, "value=", student[key]);
}






// Let's Practice
// (Qs1). Print all even numbers from  0 to 100.

for (let count = 0; count <= 100; count++){
    if (count % 2 === 0) {
        //even number
        console.log('num=', count);
    }
   
}



// (Qs2). Create a game where you start any random game number. Ask  the user to keep guessing the game number until the user enters  crrect valu.

let gameNum = 25;

let userNum = prompt("Guess the game number: ");

while(userNum != gameNum) {
    // game
   userNum = prompt("You entered worng number. Guess again:");
}
console.log("congratulations, you entered the right number");



