let values = [];

function setup() {
  createCanvas(700, 400);
  
  values = new Array(width);
  
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
}


function draw() {
  background(0);
  
  for (let i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]);
  }
  update(values);
}

function update (arr) {
  let temp = 0;
  for (let i = 0; i < values.length-1; i++) {
    if(values[i]>values[i+1]) {
      temp = values[i+1];
      values[i+1] = values[i];
      values[i] = temp;
    }
  }
}
