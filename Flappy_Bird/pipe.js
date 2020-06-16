function Pipe () {
  this.y = random(height);
  this.x = width;  
  this.diff = 120;
  this.speed = 5;
  this.movement = 0;
  this.count = 0;
  
  while(this.y < 10 || this.y > 600) {
    this.y = random(height);
  }
  
  this.getspeed = function() {
    return this.speed;
  };

  
  this.show = function() {
    fill(0, 255, 0);
    
    rect(this.x, 0, 50, this.y);
    rect(this.x, this.y + this.diff, 50, height);
  };
  
  this.update = function() {
    this.y += this.movement;

    if (this.y > 600) {
      this.movement *= -1;
    }
    this.x -= this.speed;
  };
  
  this.hits = function (bird) {
    
    //Runs if the bird is in the right height
    if (bird.y > this.y  &&  bird.y < this.y + this.diff) {
      if (this.x < 50 && this.count == 0) {
        this.count++;
        score++;
      }
    } 
    
    if (bird.y < this.y  ||  bird.y > this.y + this.diff) {
      if (bird.x > this.x && bird.x < this.x + 20) {
        return true;
      }
    }
  };     
}
