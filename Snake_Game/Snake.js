function Snake() {
  this.x = 60;
  this.y = height/2;
  this.xmove = 3;
  this.ymove = 0;
  this.speed = 3;
  
  this.index = 0;
    
  //Snake Size Array with its coordinates
  this.size = [ { x: this.x, y: this.y } ];
  
  this.show = function() {
    
    if (!(this.size[this.index].x < 0 || this.size[this.index].x > width) &&
       (!(this.size[this.index].y < 0 || this.size[this.index].y == height))) {
      
      fill(255, 255, 0);
      for (let i=0; i<=this.index; i++) {
        ellipse(this.size[i].x, this.size[i].y, 20, 20);
      }
    } else {
      this.size = [];
      food.show = function() {};
      
      //Scoring
      textSize(90);
      text("You lose!", width/2-170, height/2);
    } 
  };
  
  this.update = function() {
    
    this.size[this.index].x += this.xmove;
    this.size[this.index].y += this.ymove;
      
    for (let i=0; i<=this.index-1; i++) {
      this.size[i].x = this.size[i+1].x;
      this.size[i].y = this.size[i+1].y;
    }
  };
  
  this.collision = function(food) {
    if(abs(this.size[this.index].x - food.x) < 10 || abs(this.size[this.index].x + food.x) < 10) {
      if(abs(this.size[this.index].y - food.y) < 10 || abs(this.size[this.index].y + food.y) < 10) {
        this.size.push( { x: this.size[this.index].x, y: this.size[this.index].y } );
        this.index += 1;
        
        food.x = random(0, width);
        food.y = random(0, height);
        
        score += 1;
        this.speed += 0.1;
      }
    }
  };
  
  this.turnright = function() {
    if (this.xmove < 0) {}
    else {
      this.xmove = this.speed;
      this.ymove = 0;
    }
  };
  
  this.turnleft = function() {
    if (this.xmove > 0) {}
    else {
      this.xmove = -this.speed;
      this.ymove = 0;
    }
  };
  
  this.turnup = function() {
    if (this.ymove > 0) {}
    else {
      this.xmove = 0;
      this.ymove = -this.speed;
    }
  };
  
  this.turndown = function() {
    if (this.ymove < 0) {}
    else {
      this.xmove = 0;
      this.ymove = this.speed;
    }
  };
}
