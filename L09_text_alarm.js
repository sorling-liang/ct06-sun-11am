// write your codes here
// canvas size 400, 400
// 2 functions:
function setup() {
    createCanvas(400,400);
    background(255);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(255);

    let hh = hour();
    let sec = 0;
    fill(0); // black text
    textSize(72);
    text(nf(hh,2)+":00"+":"+sec, width/2, height/2);
}

// CCS
// cascading stylesheets
// HTML
// hypertext markup language