// write your codes here
// write 2 functions
let nounInput;
let verbInput;
let adjectiveInput;
let adverbInput;
let placeInput
let button;

let storyText;
let storyTemplates;

function setup() {
    storyTemplates = [
        "The {adj} {noun} decided to {verb} {adv} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
        "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}.",
        "",
    ];

    template = random(storyTemplates); // randomly choose 1 item from Array
    storyText = template.replace("{noun}", "dog");
    storyText = storyText.replace("{adj}", "brown");
    storyText = storyText.replace("{verb}", "barks");
    storyText = storyText.replace("{adv}",  "loudly");
    storyText = storyText.replace("{place}",  "loudly");
    console.log(storyText);

    createCanvas(600,700);

    nounInput = createInput();
    //                    x      y
    nounInput.position(width/2, 100);

    verbInput = createInput();
    verbInput.position(width/2, 140);

    adjectiveInput = createInput();
    adjectiveInput.position(width/2, 180);
    
    adverbInput = createInput();
    adverbInput.position(width/2, 220);

    placeInput = createInput();
    placeInput.position(width/2, 260);

    button = createButton("Generate Story");
    button.position(   width/2, 300);
    button.mousePressed(updateStory);
}

function draw() {
    background("silver");
    textSize(18)
    textAlign(RIGHT, CENTER);
    text("Enter a noun, e.g. dog",          width/2-10, 110);
    text("Enter a verb, e.g. cry",          width/2-10, 150);
    text("Enter an Adjective, e.g. pretty", width/2-10, 190);
    text("Enter an Adverb, e.g. happily",   width/2-10, 230);
    text("Enter a place, e.g. Ang mo kio",  width/2-10, 270);

}
function updateStory() {
    // console.log("some errors here!");
    print("Hello " + textInput.value());
    print("I am going to " + secondInput.value());
}