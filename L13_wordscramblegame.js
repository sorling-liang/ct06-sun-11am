// write your codes here
let score = 0;
let streak = 0;
let max = 0;
let message = "";

let scrambled = "";
let hiddenword = "";

let scrambledButton;
let guessInput = "";
let submitButton;

const WORDS = ["EXPRESSION","INTERNATIONAL","BUMBLEBEE", 
    "COINCIDENTALLY", "NOTEBOOK", "SCRAMBLED", "SEVENTEEN",
    "NIGERIA", "BOOKSTORE", "PHOTOGRAPHS"];

function setup() {
    createCanvas(800,600);

    scrambledButton = createButton("Re-scramble");
    scrambledButton.position(150,280);
    scrambledButton.style("font-size", "18px"); // px means pixel
    scrambledButton.size(150,30); // width and height
    scrambledButton.mousePressed(doScrambleAgain);

    guessInput = createInput();
    guessInput.position(315,280);
    guessInput.style("font-size", "18px");
    guessInput.size(150,30);

    submitButton = createButton("Submit");
    submitButton.position(485,280);
    submitButton.style("font-size", "18px");
    submitButton.size(110,30);
    submitButton.mousePressed(checkGuess);
}
function doScrambleAgain() {

}
function checkGuess() {

}
function chooseHiddenWord() {
    hiddenword = random(WORDS);
    hiddenword = hiddenword.toUpperCase();
    scrambled = scrambleWord(hiddenword);
}
function scrambleWord(aWord) {
    let arrLetters = aWord.split(""); // split a string into an array
    for (let index = arrLetters.length-1; 
        index > 0; 
        index--) {
            // do the swap
            first = arrLetters[index];
            who = floor(random(0, index+1));
            second = arrLetters[who];
            temporary = first;
            a
    }
    
}
function draw() {
    background(220);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Word Scramble Game!",          width/2, 100);
    text("Scrambled Word: " + scrambled, width/2, 160);

    textSize(24);
    text("Score: " + score,                         width/2, height/2+80);
    text("Streak: " + streak + " (Max: "+ max +")", width/2, height/2+110);
    text(message,                                   width/2, height/2+140);
}