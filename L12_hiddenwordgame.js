// write your codes here
const WORDS = [
    "POWER", "SKULL", "BLACK", 
    "WHITE", "WATER", "MESSY", 
    "COVER", "TABLE", "GREAT",
];

let guessInput;
let submitButton;
let message = "You won!";

function setup() {
    createCanvas(800,650);
    guessInput = createInput();
    guessInput.position(width/2-200, height/2);
    guessInput.style("font-size", "20px");

    submitButton = createButton("Submit");
    submitButton.position(width/2+75, height/2);
    submitButton.style("font-size", "20px");
}

function draw() {
    background("lightgray");
    fill("black");
    textSize(44);
    textAlign(CENTER, CENTER);
    text("Guess the hidden word", width/2, 75);
    text("Attempts: 0",           width/2, 135);
    text("Hint: S _ _ _ _",       width/2, 185);
    fill("red");
    textSize(18);
    text(message, width/2, height/2 + 200);
}