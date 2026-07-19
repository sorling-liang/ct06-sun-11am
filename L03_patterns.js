function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  fill("lime");

  let circleDiameter = 50;
  let circleY = 50;

  for (let num=1; num<=5; num++) {
    circle(50*num,circleY,circleDiameter);
    circleY = circleY + 50;
    print("i will not sling mud at my friend");
  }

  // circle(150,50,50);
  // circle(250,50,50);
  // circle(350,50,50);
  // circle(450,50,50);

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}