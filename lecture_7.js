// DOM Manipulation

// getAttribute(attr)  : to get the attribute value

let div = document.querySelector("div");
console.log(div);


let id = div.getAttribute("id");
console.log(id);                        // Output: box

let name= div.getAttribute("name");
console.log(name);                      // Output : JSdiv


let para = document.querySelector("p")
console.log(para.getAttribute("class"));  // Output: para




// setAttribute(attr, value)   : to set the attribute value


let paraa = document.querySelector("p");
console.log(paraa.setAttribute("class", "id"));





// style  :  syntax:  .node.style

let dev = document.querySelector('div');
console.log(dev);


console.log(dev.style.backgroundColor = "green");


console.log(dev.style.fontSize = "25px");




// Insert Elements  : let el = document.createElement("div")

// For example:
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);



// (1). node.append(el)  : adds at the end of the node(inside)

let diiv = document.querySelector('div');
diiv.append(newBtn);



// (2). node.prepend(el)   :  adda at the start of node (inside)
diiv.prepend(newBtn);

let newHeading = document.createElement('h1');
newHeading.innerHTML = `<i> Hi, I am new!</i>`;
document.querySelector("Body").prepend(newHeading);



// (3). node.before(el)  : add before the node (outside)
diiv.before(newBtn);


// (4). node.after(el)  : add after the node (outside)
diiv.after(newBtn);





// Delete Element
// node.remove() : removes the node
let paara = document.querySelector("p");
paara.remove();

newHeading.remove();






// Go to MDN and study appendChild() and remove Child()




// Let's Practice
// (Q1). Create a new button element. Give it a text "Click me", background color of red and text color of white.
// insert the button as the first element inside the body tag.