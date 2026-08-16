// write your codes here
let size = 25;
let colour = "blue";
// let showCircle = false; // in JS, true or false is in lowercase
// let showRect = false;
// let showSquare = false;

let xpos = 0;
let ypos = 0;


function setup() {
    createCanvas(600, 600);
    background("skyblue");
    // noStroke();

    xpos = width/2;
    ypos = height/2;
}


function draw() {
    background("skyblue");
    fill(colour);
    circle(xpos, ypos, size);
    //rect(xpos, ypos, size, size);

    if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos + 2;
    }
    else if (keyIsDown(LEFT_ARROW)) {
        xpos = xpos - 2;
    }  
    else if (keyIsDown(UP_ARROW)) {
        ypos = ypos - 2;
    }  
    else if (keyIsDown(DOWN_ARROW)) {
        ypos = ypos + 2;
    }    
    
    xpos = constrain(xpos, 0+12.5, width-12.5);
    ypos = constrain(ypos, 0+12.5, height-12.5);    
}

// function keyPressed() {
//     print(key);
//     print(keyCode);

//     if (keyCode === UP_ARROW) {
//         colour = "red";
//     }
//     if (keyCode === DOWN_ARROW) {
//         colour = "black";
//     }    
//     // size = 300;
//     if (key === 'c') {
//         // ! is a NOT operator
//         showCircle = !showCircle;
//     }
//     if (key === 's') {
//         // ! is a NOT operator
//         showSquare = !showSquare;
//     }
//     if (key === 'r') {
//         // ! is a NOT operator
//         showRect = !showRect;
//     }
// }

// function keyReleased() {
//     size = 50;
// }

// function mousePressed() {
//     size = 5;
//     //                  red        green        blue
//     colour = color(random(0,255), random(0,255), random(0,255));
// }

// function mouseDragged() {
//     fill(colour);
//     circle(mouseX, mouseY, size);
//     size = size + 0.5;
// }