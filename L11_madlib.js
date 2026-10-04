// write your codes here
// write 2 functions
let textInput;
let secondInput;
let button;

function setup() {
    createCanvas(600,700);

    textInput = createInput();
    //                    x      y
    textInput.position(width/2, 100);

    secondInput = createInput();
    secondInput.position(width/2, 140);

    button = createButton("Generate");
    button.position(   width/2, 200);
    button.mousePresssed(update)
}

function draw() {
    background("silver");
    textSize(18)
    textAlign(RIGHT, CENTER);
    text("give me your name",         width/2-10, 110);
    text("tell me your home address", width/2-10, 150);
}