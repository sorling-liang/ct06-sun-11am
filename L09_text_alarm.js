// write your codes here
// canvas size 400, 400
// 2 functions:
let countdown = 5;
function setup() {
    createCanvas(400,400);
    background(220);
    textAlign(CENTER, CENTER);
}
function draw() {
    background(220);
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
    print("i got mouse clicked!")
}
// CCS
// cascading stylesheets
// HTML
// hypertext markup language