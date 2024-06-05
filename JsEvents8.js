// Events in JS

// The change in the state of an object is known as an Event.
// Events are fired to notify code of "interesting changes" that my affect code execution.



// Mouse events(click, double Click etc.)
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("Btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); //26
};



let div = document.querySelector("#div");
div.ondblclick = () => {
    console.log("Div was clicked");

};




// Event Handling in JS

/* node.event = () => {
    // handle here
}       */






// Event Object
// It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.

/* Node.event = (e) => {
    //handle here
}       */

// e.target, e.type, e.clientX,e.clientY


let bb = document.querySelector("#bb");
bb.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};




// Event Listeners
// Node.addEventListener(evnt, callback)
// node.removeEventListner(event, callback)

// Note: the callback referencee should be same to remove

bb.addEventListener('click', (evt) => {
    console.log("btn1 was clicked in event listener.");
    console.log(evt);
    console.log(evt.type);
});

bb.addEventListener('click', () => {
    console.log("Hello, I am Bikash Yamphu Rai");
});


const handler3 = () => {
    console.log("button was clicked - handler3");
};

bb.addEventListener('click', handler3);

bb.addEventListener('click', () => {
    console.log("John Wick");
});






// Remove event
bb.removeEventListener('click', handler3);





// (Q). Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked agian.

let mode = document.querySelector("#ch");
let currMode = "ligth" //dark
mode.addEventListener('click', () => {
    if (currMode === 'ligth') {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector('body').style.backgroundColor = 'white';
    }
    console.log(currMode);
    console.log("You are trying to change");
})




