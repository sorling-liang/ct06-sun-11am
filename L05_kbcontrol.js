// write your codes here
let size = 50;
let colour = "blue";

function setup() {
    createCanvas(600, 600);
    background("skyblue");
    // noStroke();
}

function draw() {
    background("skyblue");
    rect(width/2, height/2, size, size);
}

function keyPressed() {
    size = 300;
}

function keyReleased() {
    size = 50;
}

// function mousePressed() {
//     size = 5;
//     //                  red        green        blue
//     colour = color(random(0,255), random(0,255), random(0,255));
// }

// function mouseDragged() {
//     fill(colour);
//     circle(mouseX, mouseY, size);
//     size = size + 0.5;
// }