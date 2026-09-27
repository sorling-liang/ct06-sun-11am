// write your codes here
// write your 2 functions
let textInput;
let someVar;
function setup() {
    createCanvas(600,400);
    background("lightpink");
    textAlign(CENTER, CENTER);
    textInput = createInput();
    textInput.position(width/2-100, height/2);
    textInput.input(updateMyVar); // listen for text changes
}
// forever loop: updated 60 frames per one second
function draw() {
    background("lightpink");
    stroke("red"); // outline
    strokeWeight(8);
    fill("blue");
    rect(150,80,300,80, 15,15,15,15);
    fill("white");
    textSize(34);
    text(someVar, width/2, height/2-80);

    textSize(14);
    fill("black")
    textAlign(LEFT, CENTER);
    strokeWeight(1);
    text("Tell me your name:", 80, height/2+15);
}
function updateMyVar() {
    someVar = textInput.value();
}