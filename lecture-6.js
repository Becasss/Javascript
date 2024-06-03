// Starter Code
// <style> tag connects HTML with CSS
// <script> tag connects HTML with JS



// improves the readability
// promote modular
// Browser Caching



// Window Object:
// The window object represets an open window in a browser. It is brower's object(not Javscripts) and is automatically created by browser.
// It is a global object with lots of properties and Methods.



// window.alert("Hello Sathi");


// Note:

// console.log  ==> Print
// console.dir ==> to print object




// What is DOM?
// when a web page is loaded, the browser creates a Document Object Model (DOM) of the page.


// Advantages of DOM:
// dynamic changes and manipulation 

console.dir(document.body);




// selecting with ID
// document.getElementById("myID")
let x = document.getElementById("hh");
console.dir(x);




// Selecting with class
// document.getElementByClassName("myClass")

let z = document.getElementsByClassName('cls');
console.dir(z);




// selecting with tag
// document.getElementBytTagName("p")

let paras = document.getElementsByTagName("p");
console.log(paras);



let elemeents = document.querySelector('p'); // 1st Element
console.dir(elemeents);

let allEl = document.querySelectorAll("p"); // all elements
console.dir(allEl);




// DOM Manipulation

// Properties
//  tagName : returns tag for element nodes



// innerText : returns the text content of the element and all its children
let div = document.querySelector("div");
console.dir(div);




// innerHTML : returns the plain text or HTML contents in the element



// textContent : returns textual content even for hidden elements
let h = document.querySelector('h1');
console.dir(h);

// DOM Tree:
// (1). text Nodes
// (2). comment
// (3). elements



// (Q1). Create a H2 heading element with text - "Hello Javascript". Append "from Apna College students" to this text using Js.
let change = document.querySelector("h2");
console.dir(change, innerText);
change.innerText = change.innerText + "from Apna college students";




// (Q2). Create 3 divs common class name- "box". Acces them & add some unique text to each of them.
let diev = document.querySelectorAll(".box");
console.dir(diev[0]);