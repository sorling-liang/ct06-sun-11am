// write your codes here
function setup() {
    createCanvas(800,650);
}

function draw() {
    background("lightgray");
    textSize(44);
    textAlign(CENTER, CENTER);
    text("Guess the hidden word", width/2, 75);
    text("Attempts: 0",           width/2, 75);
    text("Hint: S _ _ _ _",       width/2, 75);
}