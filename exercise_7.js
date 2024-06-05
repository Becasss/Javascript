// Let's Practice
// (Q1). Create a new button element. Give it a text "Click me", background color of red and text color of white.
// insert the button as the first element inside the body tag.


let newBtn = document.createElement('button');
newBtn.innerText = "Click Me!";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector('body').prepend(newBtn);
console.log(newBtn);











// (Q2). Create a <p> tag in html, give it a class and some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList. 

let para = document.querySelector("p");
para.classList.add("newClass");