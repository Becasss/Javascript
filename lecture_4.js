// Arrays in JS
// Collections of Items
// let heroes = ["Iron Man", "Aquaman", 'Thor', "badman"];


let marks = [97, 67, 84, 37];
console.log(marks);
console.log(marks.length);// property 



let heroes = ["superman", 'Shaktiman', ' THor', 'Ironman', 'Spiderman'];
console.log(heroes);
console.log(typeof heroes);// object





// Array Indices---arr[0], arr[1], arr[2].....

console.log(heroes[0]);
console.log(heroes[2] + "\n" + heroes[6]);

// strings--- are immutable(unchangeable)
// array  --- are mutable (changeable)



// Loops over an Array
// Print all elements of an array
// Loops ----itration(strings, object, arrays)



// For Loop
for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}



// For of
for (let x of heroes) {
    console.log(x.toUpperCase());
}



// Let's Practice
//(Q). For a given array with of students --> [85, 97, 44, 37, 76, 60], Find the average marks of the entire class.

let mark = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let x of mark){
    sum += x;
}
let avg = sum / mark.length;
console.log(`THe average marks is ${avg}`);




// (Q2). For a given array wiht prices of 5 items --> [250, 645, 300, 00, 50]
// All items have an offer of 10% on them. Change the array to store final price after applying offer.
 
let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
   // console.log(`valuee of index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++
}


// for loop
for (let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);




// Array Methods

// Push() : add to end
let name = ['bikash', 'sirjana', 'dhan bahadur', 'indra kumari'];
name.push("daash", 'dal');
console.log(name);



// pop() : delete from end and return
name.pop();
let deletedItem = name.pop();
console.log(name);
console.log(`deleted item = ${deletedItem}`);



// toString()  : converts an array to string
let foodItems = ["apple", "Banana", "Cherry", "Orange"];
console.log(foodItems.toString());



// concat() : joins multiplee arrays and returns result
let marverl_heroes = ["IronMan", "Spiderman", "Thor"];
let dc_heroes = ["superman", 'batman'];

let hero = marverl_heroes.concat(dc_heroes);
console.log(hero);


// unshift() : add to start
marverl_heroes.unshift("ANTMAN");
console.log(marverl_heroes.unshift());



// shift() : delete from start
let val = marverl_heroes.shift();
console.log(`deleeted value is = ${val}`);




// slice() method  : returns a piece of the array--- slice(startdx, endldx)
let zero = ["Bikash", "Sirjana", "Duman", "Rupraj", "Khandbari", "Dharan"];
console.log(zero.slice(0, 3));




// splice() method : change original array (add, remove, replace)
// splice(startIdx, delCount, newEl1...)

//console.log(zero.splice(1, 1, "sujan", "dash"));




// Lets Practice:
// (Q1). Create an array to store companies --> "Bloombrg", "Microsoft","Uber", "Google", "IBM", "Netfli"

let companies = ["Bloomberg", "Microsoft", " Uber", "google", "IBM", "Netflix"];
console.log(companies);


// remvoe the first company from the array
console.log(companies.splice(0, 1));
console.log(companies.shift());


