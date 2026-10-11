// 2 functions

let boxXpos = 0;
let speed = 2;

function setup() {
    createCanvas(400, 650);
    boxXpos = 55; // set the value here
}

// forever loop
function draw() {
    background("orange"); // erase the canvas

    boxXpos += speed; // move the rectangle, going to the right

    if (boxXpos > width) {
        s
    }

    rectMode(CENTER);
    rect(boxXpos, height/2, 100, 25);
}