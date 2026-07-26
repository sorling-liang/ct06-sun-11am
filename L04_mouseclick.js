// write your codes here

// create 2 JavaScript functions
// setup()
// draw()

let shapeColor = "pink";

function setup() {
    //            w    h
    createCanvas(500, 500);
    background("hotpink");
    //noLoop(); // for lesson 4 no need
    fill(shapeColor);
    noStroke();
}

// function draw() {
//     // let xpos = 350;
//     // let ypos = 50;
//     // let ggColor = 0;

//     // for (let num=1; num<4; num++) {
//     //     fill(0, ggColor, 0);
//     //      //     x     y    diameter
//     //     circle(xpos, ypos, 50);
//     //     xpos = xpos-50;
//     //     ypos = ypos+50;
//     //     ggColor = ggColor + 50;
//     // }

//     fill(shapeColor);
//     circle(width/2, height/2, 200);
// }

function mousePressed() {
    shapeColor = color(random(0,255));
}

function mouseReleased() {
    shapeColor = "white";
}

function mouseMoved() {
    // system variables: mouseX, mouseY
    circle(mouseX,  mouseY, 20);
}