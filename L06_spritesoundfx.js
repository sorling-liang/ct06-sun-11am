// write your codes here
// write 2 basic functions

let pico;
let xpos, ypos;
let bgm, sfx;

function preload() {
    // any media, image or sound must load here
    pico = loadImage("assets/pico-a.png");

    bgm = loadSound("assets/bossaNova.mp3");
}

function setup() {
    createCanvas(350, 350);
    background("lightblue");
    xpos = 0;

    bgm.loop(); // play non-stop
}
function draw() {
    background("lightblue"); // erase my trail
    //          x    y  w   h
    image(pico, xpos,0, 110,133);

    if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos + 2;
    }
}