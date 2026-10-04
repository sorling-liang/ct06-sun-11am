// write 2 functions
// call once

let textInput;
let button;

function setup() {
    createCanvas(700, 800);

    textInput = createInput();
    //                     x      y
    textInput.position(  width/2, 100);

    button = createButton("Click ME");
    button.position(     width/2, 135);
    button.mousePressed( updateText );
}

// forever loop; 60 frames per one seconds
function draw() {
    background("silver");
    textSize(18);
    textAlign(RIGHT, CENTER);
    text("Give me your name:", width/2-15, 110);
}
function updateText() {
    console.log(textInput.value());
}