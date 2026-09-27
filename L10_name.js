// write your codes here
// write your 2 functions
let textInput;
let ageInput;
let someVar = "";
let someAge = 0;
let colorPicker;

function setup() {
    createCanvas(600,400);
    background("lightpink");
    textAlign(CENTER, CENTER);

    textInput = createInput();
    textInput.position(width/2-100, height/2);
    textInput.input(updateMyVar); // listen for text changes

    ageInput = createInput();
    ageInput.position(width/2-100, height/2+40);
    ageInput.input(updateMyAge); // listen for text changes

    colorPicker = createColorPicker("lightpink");
    colorPicker.position(width/2-100, height/2+80);
}
// forever loop: updated 60 frames per one second
function draw() {
    background("lightpink");
    fill("blue");
    rect(150,10,300,140, 15,15,15,15);
    fill("white");
    textSize(34);
    text(someVar, width/2-50, 80);
    text(someAge, width/2-50, 130);
    textSize(14);
    fill("black");
    textAlign(LEFT, CENTER);
    text("Tell me your name:", 70, height/2+10);
    text("Tell me your age:",  70, height/2+50);
}
function updateMyVar() {
    someVar = textInput.value();
}
function updateMyAge() {
    someAge = ageInput.value();
}