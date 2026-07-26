// write your codes here

// create 2 JavaScript functions
// setup()
// draw()
function setup() {
    //            w    h
    createCanvas(500, 500);
    background("hotpink");
}

function draw() {
    let xpos = 50;
    let ypos = 50;
    let ggColor = 0;
    
    for (let num=1; num<6; num++) {
        fill(ggColor);
        circle(xpos,ypos,50);
        xpos = xpos+50;
        ypos = ypos+50;
        ggColor = ggColor + 50;
    }
}