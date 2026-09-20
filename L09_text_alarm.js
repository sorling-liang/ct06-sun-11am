// write your codes here
// canvas size 400, 400
// 2 functions:
let countdown = 5;
let objectId;
let bgColor = "lightgrey";
let bgMusic;

function preload() {
    // how to load bossa nova mp3 file?
    bgMusic = loadSound("assets/bossaNova.mp3");
}
function setup() {
    createCanvas(400,400);
    background(bgColor);
    textAlign(CENTER, CENTER);
}
function draw() {
    background(bgColor);
    let hh = hour();
    let mins = minute();
    let sec = second();
    fill(0); // black text
    textSize(72);
    text(nf(hh,2) + ":" + nf(mins,2) + ":" + nf(sec,2), width/2, height/2);
    // display countdown variable for me here, red color text
    fill("red");
    textSize(32);
    text(countdown, width/2, height/2+75);
    textSize(16);
    text("click here to start countdown", width/2, height/2+105);
}
function mousePressed() {
    //console.log("i got mouse clicked!"); // print() vs console.log()
    objectId = setInterval(updateCountdown, 1000); // in one second
}

function updateCountdown() {
    if (countdown === 0) {
        clearInterval(objectId); // delete the object
        bgColor = "red";
        bgMusic.play(); // start the music, alarm go off
    } 
    else {
        countdown = countdown - 1; // reduce by 1
    }
}
// CCS
// cascading stylesheets
// HTML
// hypertext markup language