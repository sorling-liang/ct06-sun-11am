let ballSize = 40;
let ballX = 0;
let ballY = 0;
let ballSpeedX = 2;
let ballSpeedY = 2;

function setup() {
    createCanvas(400, 600);
    noStroke();
    ballX = 50;
    ballY = height/2;
}

function draw() {
    background(200); // lightgray
    fill(0);
    circle(ballX, ballY, ballSize);

    ballX = ballX + ballSpeedX;
}

















// recap
// // write your codes here
// let pico;
// let xpos, ypos;
// let bgm, sfx;
// let picoWidth;

// function preload() {
//     // any media, image or sound must load here
//     pico = loadImage("assets/pico-a.png");
//     sfx = loadSound("assets/pop.mp3");
// }

// function setup() {
//     createCanvas(600,600);
//     background("lightblue");
//     xpos = width/2;
//     ypos = height/2;
//     picoWidth = 110;
// }

// function draw() {
//     background("lightblue"); // erase my trail
//     imageMode(CENTER);
//     //          x    y     w          h
//     image(pico, xpos,ypos, picoWidth, 133);

//     if (keyIsDown(RIGHT_ARROW)) {
//         picoWidth = 110; // revert
//         xpos = xpos + 2;
//     }
//     if (keyIsDown(LEFT_ARROW)) {
//         xpos = xpos - 2;
//     }
//     if (keyIsDown(UP_ARROW)) {
//         ypos = ypos - 2;
//     }      
//     if (keyIsDown(DOWN_ARROW)) {
//         ypos = ypos + 2;
//     }

//     xpos = constrain(xpos, 0+55, width-55);
//     ypos = constrain(ypos, 0+65, height-65);    
// }

// function keyPressed() {
//     if (keyCode === 32) {
//         picoWidth = 55; // half-sized
//     }
// }