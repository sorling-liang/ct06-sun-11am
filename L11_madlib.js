// write your codes here
// write 2 functions
let nounInput;
let verbInput;
let adjectiveInput;
let adverbInput;
let placeInput
let button;

function setup() {
    createCanvas(600,700);

    nounInput = createInput();
    //                    x      y
    nounInput.position(width/2, 100);

    verbInput = createInput();
    verbInput.position(width/2, 140);

    adjectiveInput = createInput();
    adjectiveInput.position(width/2, 180);
    
    adverbInput = createInput();
    adverbInput.position(width/2, 180);

    adverbInput = createInput();
    adverbInput.position(width/2, 180);

    button = createButton("Generate Story");
    button.position(   width/2, 500);
    button.mousePressed(updateStory);
}

function draw() {
    background("silver");
    textSize(18)
    textAlign(RIGHT, CENTER);
    text("give me your name",         width/2-10, 110);
    text("tell me your home address", width/2-10, 150);
}
function updateStory() {
    print("Hello " + textInput.value());
    print("I am going to " + secondInput.value());
}