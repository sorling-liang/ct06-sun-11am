// write 2 functions
// call once

let textInput;
let button;

function setup() {
    createCanvas(700, 800);

    textInput = createInput();
    textInput.position(width/2, 100);

    button = createButton("Click ME");
}

// forever loop; 60 frames per one seconds
function draw() {
    background("brown")
}