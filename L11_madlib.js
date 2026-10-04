// write 2 functions
let nounInput;
let verbInput;
let adjectiveInput;
let adverbInput;
let placeInput;
let button;

let storyText = "";
let storyTemplates;

function setup() {
    storyTemplates = [
        "The {adj} {noun} decided to {verb} {adv} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} {adv} in the {place}.",
        "Did you hear about the {adj} {noun} that tried to {verb} {adv} "
    ];


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
    text("Enter a verb e.g. jump:", width/2-15, 140);
    text("Enter an adjective e.g. happy:", width/2-15, 170);
    text("Enter an adverb e.g. sadly:", width/2-15, 200);
    text("Enter a place e.g. the library:", width/2-15, 230);

}
function updateText() {
    console.log("noun: "      + nounInput.value());
    console.log("verb: "      + verbInput.value());
    console.log("adjective: " + adjectiveInput.value());
    console.log("verb: "     + adVerbInput.value());
    console.log("place: "    + placeInput.value());
}