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

    button = createButton("Generate Story");
    button.position(     width/2, 235);
    button.mousePressed( updateText );
}

// forever loop; 60 frames per one seconds
function draw() {
    background("silver");
    textSize(18);
    textAlign(RIGHT, CENTER);
    text("Enter a noun e.g. dog:", width/2-15, 110);
}
function updateText() {
    console.log("Hello, " + textInput.value());
}