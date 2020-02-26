function setup() {
  createCanvas(600, 600);
}

// function to draw a house
function draw() {
  
  print(pmouseX + ', ' + pmouseY);
  
  let x = map(mouseX, 0, 200, 0, 255);
  let r = map(mouseX, 0, 200, 0, 255);
  let g = map(mouseY, height, 200, 0, 255);
  let b = map(mouseX, height, 200, 0, 255);
  
  background(x, r, g, b);
  
  fill(255, 255, 0, 255);
  ellipse(pmouseX, pmouseY, 50, 50);
  
  fill(190, 190, 190, 255);
  rect(0, 300, 600, 600);
  
  strokeWeight(5);
  
  //
  // shape templates:
  // line(x1, y1, x2, y2);
  // triangle(x1, y1, x2, y2, x3, y3);
  // rect(x1, y1, W, H);
  // ellipse(x1, y1, W, H);
  //
  
  var num1 = 100;
  var num2 = 25;
  //
  // sides of house
  //
  fill(190, 190, 190, 255);
  rect(num1, num1*2, num1*4, num1*2);
  
  //
  // windows of house
  //
  fill(255, 255, 255, 255);
  rect(150, 225, 50, 50);
  line(175, 275, 175, 225);
  line(200, 250, 150, 250);
  
  rect(275, 225, 50, 50);
  line(300, 275, 300, 225);
  
  rect(400, 225, 50, 50);
  line(400, 250, 450, 250);
  line(425, 275, 425, 225);
  
  //
  // roof of house
  //
  fill(2, 45, 100, 100);
  triangle(50, 200, 200, 75, 350, 200);
  triangle(350, 200, 450, 100, 550, 200);
  
  //
  // door to house
  //
  fill(255, 0, 0, 255);
  rect(280, 330, 40, 70);
  
  //
  // path to house
  //
  line(350, 400, 300, 450);
  line(250, 400, 200, 450);
  line(300, 450, 400, 500);
  line(200, 450, 300, 500);
  line(400, 500, 375, 600);
  line(300, 600, 300, 500);
  
  //
  // shrubs
  //
  //ellipse(175, 380, 40, 30);
  
  // for (var i = 50; i < mouseX; i+=50)
  // {
  //   strokeWeight(0);
  //   fill(2, 40, 2);
  //   ellipse(i, 40, 10, 10);
  // }
  
  strokeWeight(5);
  //
  // lines to make house 3D
  //
  // roof 1
  line(200, 75, 385, 95);
  line(385, 95, 420, 130);
  // roof 2
  line(450, 100, 490, 105);
  line(490, 105, 570, 190);
  line(570, 190, 550, 200);
  // side of house
  line(535, 200, 535, 380);
  line(535, 380, 500, 400);
  // roof shadowing/depth
  fill(2, 45, 100, 125);
  strokeWeight(0);
  triangle(50, 200, 200, 78, 200, 155);
  triangle(350, 200, 450, 100, 450, 160);
  fill(2, 45, 100, 150);
  triangle(50, 200, 200, 155, 350, 200);
  triangle(350, 200, 450, 160, 550, 200);
}