// write your codes here
let score = 0;
let streak = 0;
let max = 0;
let message = "";

const WORDS = ["Expression","International","Bumblebee"];

function setup() {
    createCanvas(800,600);
}
function draw() {
    background(220);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Word Scramble Game!", width/2, 100);
    text("Scrambled Word: COITAARN", width/2, 160);

    textSize(24);
    text("Score: " + score,                         width/2, height/2+80);
    text("Streak: " + streak + " (Max: "+ max +")", width/2, height/2+110);
    text(message,                                   width/2, height/2+140);
}