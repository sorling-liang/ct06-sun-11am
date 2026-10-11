// 2 functions

let boxXpos = 0;
let speed = 2;

function setup() {
    createCanvas(400, 650);
    boxXpos = 55; // set the value here
}

// forever loop
function draw() {
    background("orange");

    boxXpos += speed; // move

    rectMode(CENTER);
    rect(boxXpos, height/2, 100, 25);
}