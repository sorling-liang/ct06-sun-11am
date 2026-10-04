// write 2 functions
let nounInput;
let verbInput;
let adjectiveInput;
let adverbInput;
let placeInput;
let button;

function setup() {
    createCanvas(700, 800);

    nounInput = createInput();
    //                     x      y
    nounInput.position(  width/2, 100);

    verbInput = createInput();
    verbInput.position(  width/2, 130);

    adjectiveInput = createInput();
    adjectiveInput.position(  width/2, 160);

    adVerbInput = createInput();
    adVerbInput.position(  width/2, 190);

    placeInput = createInput();
    placeInput.position(  width/2, 220);

    button = createButton("Generate Story");
    button.position(     width/2, 255);
    button.mousePressed( updateText );
}

// forever loop; 60 frames per one seconds
function draw() {
    background("silver");
    textSize(18);
    textAlign(RIGHT, CENTER);
    text("Enter a noun e.g. dog:", width/2-15, 110);
    text("Enter a verb e.g. jump:", width/2-15, 110);
    text("Enter a noun e.g. dog:", width/2-15, 110);
    text("Enter a noun e.g. dog:", width/2-15, 110);
}
function updateText() {
    console.log("Hello, " + textInput.value());
}