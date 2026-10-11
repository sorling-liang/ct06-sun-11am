// write your codes here
const WORDS = [
    "POWER", "SKULL", "BLACK", 
    "WHITE", "WATER", "MESSY", 
    "COVER", "TABLE", "GREAT",
];

let guessInput;
let submitButton;

function setup() {
    createCanvas(800,650);
    guessInput = createInput();
    gues
    submitButton = createButton("Submit");
}

function draw() {
    background("lightgray");
    textSize(44);
    textAlign(CENTER, CENTER);
    text("Guess the hidden word", width/2, 75);
    text("Attempts: 0",           width/2, 135);
    text("Hint: S _ _ _ _",       width/2, 185);
}