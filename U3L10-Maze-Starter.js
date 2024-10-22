let circleX, circleY;
let targetX, targetY;
let targetFalling = false;
let boxY;


function setup() {
  createCanvas(300, 400);
  initializeGame();
}


function draw() {
  background(220);
  drawMaze();
  drawCircle();
  drawTarget();
  drawBox();
  displayPoints()
  moveCircle()
}


function initializeGame() {
  circleX = 25;
  circleY = 25;
  targetX = width - 25;
  targetY = 25;
  boxY = height - 25; // Position of the box where the target will fall into
}


function drawMaze() {
  // Draw the maze walls
  stroke(0);
  fill(100);
  rect(75, 0, 20, 200); // thicker wall 1
  rect(225, 0, 20, 200); // thicker wall 3
}


function drawCircle() {
  // Draw the circle
  noStroke();
  fill(0, 0, 255);
  ellipse(circleX, circleY, 20, 20);
}


function drawTarget() {
  ellipse(targetX, targetY, 20, 20);
}


function drawBox() {
  // Draw the box
  stroke(0);
  strokeWeight(1);
  noFill();
  rect(targetX - 15, boxY - 15, 30, 30); // Box for the target to fall into
}


function moveCircle() {
  // Move the circle with arrow keys
 
}


function displayPoints() {
  // Display points
  fill(0);
  textSize(16);
  text("Points: " , 10, height - 10);
}


function mousePressed() {
  // Check if the target is in the box and clicked
  if (targetY === boxY) {
    resetGame(); // Reset the game
  }
}




