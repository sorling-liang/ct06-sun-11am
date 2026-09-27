// write your codes here
// write your 2 functions
let textInput;

function setup() {
    createCanvas(600,400);
    background("lightpink");

    textInput = createInput();
    textInput.position(width/2-100, height/2);
}

function draw() {
    background("lightpink");
    textSize(34);
    text(someVar, width/2, height/2-80);
}