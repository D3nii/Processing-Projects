var snake;
var food;
var score = 0;

function setup() {
  createCanvas(720, 814);

  snake = new Snake();
  food = new Food();  
}


function draw() {
  background(0);
  
  snake.show();
  snake.update();
  
  food.show();
  snake.collision(food);
  
  //Scoring
  textSize(30);
  text("Score: " + str(score), width/2-50, 50);
}

function keyPressed() {
  
  //Left Arrow Key
  if (keyCode == 37) {
    snake.turnleft();
  }
  
  //Up Arrow Key
  if (keyCode == 38) {
    snake.turnup();
  }
  
  //Right Arrow Key
  if (keyCode == 39) {
    snake.turnright();
  }
  
  //Down Arrow Key
  if (keyCode == 40) {
    snake.turndown();
  }
}
