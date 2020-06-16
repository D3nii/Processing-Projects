function Food() {
  this.x = int(random(0, width));
  this.y = int(random(0, height));
  
  this.show = function() {
    
    //Checking to avoid the borders
    while (this.x < 20 || this.x > width - 20) {
      this.x = int(random(0, width));
    }
    while (this.y < 20 || this.y > height - 20) {
      this.y = int(random(0, width));
    }
        
    fill(255, 0, 0);
    ellipse(this.x, this.y, 20, 20);
  };
}
