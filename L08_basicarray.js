// write your codes here
let ypos = 0;
let lineY = 0;
let storyText = [];

function setup() {
    createCanvas(400,600);
    ypos = height;

    storyText[0] = "long long long long time ago...";
    storyText[1] = "my grandma told me a story.";
    storyText[2] = "caleb scored well for his prelims";
    storyText[3] = "and the end";

    print(storyText); // check the js console
}

// forever loop
function draw() {
    background(220); // erase the canvas
    textSize(18);
    fill("blue");
    textAlign(CENTER, CENTER);

    lineY = 0
    for (let count=0; count < storyText.length; count++ ) {
        //                       x       y
        text(storyText[count], width/2, ypos + lineY);
        lineY = lineY + 25; // skip and push lower
    }
    ypos = ypos - 2;

    if (ypos < 0) {
        ypos = height;
    }
}