var bird;
var pipe = [];
var score = 0;
var speed;
var run = true;

function setup() {
  createCanvas(700, 810);
  
  bird = new Bird();
  
  pipe.push(new Pipe());
  
  bg = loadImage("bg.jpg");
}

function draw() {
  background(bg);


  //Showing the Pipes
  for (let i=0; i<pipe.length; i++) {
    if(run) {
      pipe[i].show();
      pipe[i].update();
    }
    
    
    //Checking if the Bird hit the Pipe
    if (pipe[i].hits(bird) || !run) {
      run = false;
      textSize(50);
      fill(255, 0, 0);
      text("YOU LOSE", width/2-130, height/2);
      bird.dead();
    }
    
    //----
    speed = pipe[i].getspeed();
  }
  
  
  //Bird
  bird.show();
  bird.update();


  //Adding new Pipes every 70 Pixels
  if (frameCount % round(370/speed) == 0 && run) {
    pipe.push(new Pipe());
  }
  
  
  //Scoring
  textSize(30);
  text("Score: " + str(score), width/2-50, 50);
}

function keyPressed() {
  if (keyCode == 32) {
    bird.jump();
  }
}
