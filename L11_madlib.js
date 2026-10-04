// write 2 functions
// call once

let textInput;
let button;

function setup() {
    createCanvas(700, 800);

    textInput = createInput();
    textInput.position();

    button = createButton("Click ME");
}

// forever loop; 60 frames per one seconds
function draw() {
    background("brown")
}