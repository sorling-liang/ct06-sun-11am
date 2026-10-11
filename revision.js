// 2 functions

let boxXpos = 0;
let speed = 2;

function setup() {
    createCanvas(400, 650);
    boxXpos = width/2; // set the value here
}

function draw() {
    background("orange");
    rectMode(CENTER);
    rect(boxXpos, height/2, 100, 25);
}