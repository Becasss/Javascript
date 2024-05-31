// strings in JS
// string is a sequnce of characters used to represent text


// create a string
let str = " BIkash Yamphu Rai";
console.log(str);


//inbuilt properties:
// string length ---- str.length
console.log(str.length);



// string indices---- str[0], str[1], str[2]
console.log(str[12]);



// Template Literals---- A way to have embedded expression in strings

let sentence = `This is a template literal`;
console.log(sentence);
console.log(typeof sentence);


// example:
let obj = {
    item: 'Pen',
    price: 10,
};
console.log("the cost of ", obj.item, "is", obj.price, "rupees");

// string interpolation-- to create strings by doing substitution of placeholders
//syntax: ${}
let output = `The cost of ${obj.item} is ${obj.price} rupees.`
console.log(output);



// String Methods(functions) in JS

// toUpperCase() and toLowerCase()
console.log(str.toLowerCase() + str.toUpperCase());



// str.trim()---removes whitespaces
console.log(str.trim())




// str.slice(start, end)--retruns part of stirng

console.log(str.slice(2, 7));


/// str1.concat(str2)---joins str2 with str1
let str1 = " loves sirjana";
console.log(str.concat(str1));



// Js replace(searchVal, newVal)
console.log(str.replace("BI", "Hi"));



// str.charAt(idx)

console.log(str.charAt(3));




// let's Practice
// (Q). Prompt the user to enter their full name. Generate a username for them based on the inut.
// Start username with @, followed by their full name and ending with the fullname length.
let fullName = prompt("enter your fullname without spaces:");

let userName = "@" + fullName + fullName.length;
console.log(userName);