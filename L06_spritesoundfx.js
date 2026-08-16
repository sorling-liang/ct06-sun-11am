// write your codes here
// write 2 basic functions

let bgm;
let pico;

function preload() {
    // any media, image or sound must load here
    pico = loadImage("assets/pico-a.png");
}

function setup() {
    createCanvas(350, 350);
    background("lightblue");
}

function draw() {
    //          x y  w   h
    image(pico, 0,0, 110,133);
    
    if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos + 2;
    }
}