
function setup() 
{
  //init canvas size
  createCanvas(1000,1000);
  //setup background color
  background(200);
  
  fill(200,0,0);
  //centerX, centerY, radius
  circle(500,500,500);
  
  fill(0,200,0);
  //leftX, leftY, width, height
  rect(200,200,500,200);
  
  fill(0,0,200);
  triangle(500,200,200,700,800,700);
  
  stroke(200,0,0);
  strokeWeight(10);
  line(200,200,800,200);
   stroke(0,200,0);
  line(800,200,800,800);
   stroke(0,0,200);
  line(800,800,200,800);
   stroke(255,255,255);
  line(200,800,200,200);
  
  strokeWeight(50);
  point(500,500);
}


//function draw() {

//}
