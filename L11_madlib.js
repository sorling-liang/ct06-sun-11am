// write your codes here
// write 2 functions
let textInput;
let button;

function setup() {
    createCanvas(600,700);

    textInput = createInput();
    //                    x      y
    textInput.position(width/2, 100);

    button = createButton("Submit");
    button.position(   width/2, 230);
}

function draw() {
    background("silver");
    textSize(18)
    textAlign(RIGHT, CENTER);
    text("give me your name",         width/2-10, 110);
    text("tell me your home address", width/2-10, 150);
}