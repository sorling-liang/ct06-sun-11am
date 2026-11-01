// write your codes here
let gameStarted = false;
let score = 0;

let playerX = 100;
let playerY;
let playerSize = 50;
let velocity = 10; // speed of player
let isGrounded = false;


// obstacles;
let spikesX = [];

let spikeWidth = 20;
let spikeHeight = 30;

function setup() {
    createCanvas(600,400);
    background("black");
    playerY = height - playerSize;
}

function draw() {
    background("black"); // erase

    // if not gameStarted means gameStarted === false
    if (!gameStarted) {
        drawStartScreen();
        return;
    }
    
    velocity += 0.8; // simulate gravity
    playerY += velocity; // pull playerY downwards

    if (playerY >= height - playerSize) {

        velocity = 0;
        isGrounded = true;
        playerY = height - playerSize;
    }
    else {
        isGrounded = false;
    }

    fill("cyan");
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Press SPACE to jump!", width/2, 50);
    text("Score: "+score,        width/2, 80);

    // player
    fill("lime");
    rect(playerX, playerY, playerSize, playerSize);
}
function drawStartScreen() {
    fill("white");
    textSize(44);
    textAlign(CENTER, CENTER);
    text("Press SPACE to start", width/2, height/2);
}
function keyPressed() {
    if (keyCode === 32 && isGrounded) {
        velocity = -18; // give a upward push
    }
    else if (keyCode === 32) {
        gameStarted = true;
    }
}