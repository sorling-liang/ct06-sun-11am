// write your codes here
// write 2 basic functions

let pico;
let xpos, ypos;
let bgm, sfx;

function preload() {
    // any media, image or sound must load here
    pico = loadImage("assets/pico-a.png");

    bgm = loadSound("assets/bossaNova.mp3");
    sfx = loadSound("assets/pop.mp3");
}

function setup() {
    createCanvas(350, 350);
    background("lightblue");
    xpos = 0;
    ypos = 0;

    //bgm.loop(); // play non-stop
}
function draw() {
    background("lightblue"); // erase my trail
    //          x    y     w   h
    image(pico, xpos,ypos, 110,133);

    if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos + 2;
    }
    if (keyIsDown(UP_ARROW)) {
        ypos = ypos - 2;
    }    

    xpos = constrain(xpos, 0, width);
    ypos = constrain(ypos, 0, height);
}
function keyPressed() {
    // when space key press, play pop sound
    if (keyCode === 32) {
        sfx.play();
    }

    if (key === 's') {
        bgm.stop();
    }
    if (key === 'c') {
        bgm.play();
    }    
}