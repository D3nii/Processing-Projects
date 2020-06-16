function Bird() {
  this.x = 50;
  this.y = height/2;
  this.gravity = 1;
  this.velocity = 0;
  this.lift = -1;
  img = loadImage("bird.png");
  
  this.show = function() {
    //image(img, this.x, this.y, 200, 200);
    fill(255, 255, 0);
    ellipse(this.x, this.y, 32, 32);
    
    if (this.y > height) {
      this.y = height;
    }
  };
  
  this.update = function () {
    this.gravity = speed/5;
    this.lift = -speed*5;
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
  };
  
  this.jump = function () {
    this.velocity += this.lift;
  };
  
  this.dead = function() {
    this.velocity = 10;
  };
}
