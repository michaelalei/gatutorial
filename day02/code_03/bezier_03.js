
var arr = [];

function setup() {
  createCanvas(1000,1000);
  
  //frameRate(1);
  for(let i = 0 ;i < 10 ;i++)
  {
    let p1 = createVector(random(600,800),random(100,300));
    //let p2 = createVector(500,500);
    let p3 = createVector(random(100,500),random(700,900));
    let p4 = createVector(random(500,900),random(700,900));
    arr.push(p1);
    //arr.push(p2);
    arr.push(p3);
    arr.push(p4);
  }
}


function draw() 
{
  background(200);
  for(let i = 0 ;i < 10 ; i++)
  {
    let p1 = arr[i];
    let p2 = createVector(800,800);
    let p3 = arr[i+1];
    let p4 = arr[i+2];
    drawBS_C(p1,p2,p3,p4);
  }
}


function drawBS_C(p1,p2,p3,p4)
{
  noFill();
  strokeWeight(5);
  circle(p1.x,p1.y,20);
  circle(p2.x,p2.y,20);
  circle(p3.x,p3.y,20);
  circle(p4.x,p4.y,20);
  bezier(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
  
  //push();

  //noStroke();
  //for(let i = 0 ;i < 1 ; i += 0.01)
  //{
  //  fill(i*200,0,200-i*200,i*200);
  //  let px = bezierPoint(p1.x,p2.x,p3.x,p4.x,i);
  //  let py = bezierPoint(p1.y,p2.y,p3.y,p4.y,i);
  //  circle(px,py,i*100);
  //}
  //pop();
}


function drawBS_B()
{
  let p2 = createVector(mouseX,mouseY);
  let p1 = createVector(random(600,800),random(100,300));
  let p3 = createVector(random(100,500),random(700,900));
  let p4 = createVector(random(500,900),random(700,900));
  
  noFill();
  strokeWeight(5);
  circle(p1.x,p1.y,20);
  circle(p2.x,p2.y,20);
  circle(p3.x,p3.y,20);
  circle(p4.x,p4.y,20);
  bezier(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
  
  push();

  noStroke();
  for(let i = 0 ;i < 1 ; i += 0.01)
  {
    fill(i*200,0,200-i*200,i*200);
    let px = bezierPoint(p1.x,p2.x,p3.x,p4.x,i);
    let py = bezierPoint(p1.y,p2.y,p3.y,p4.y,i);
    circle(px,py,i*100);
  }
  pop();
}

function drawBS_A()
{
  let p2 = createVector(mouseX,mouseY);
  let p1 = createVector(700,100);
  let p3 = createVector(300,800);
  let p4 = createVector(700,800);
  
  noFill();
  strokeWeight(5);
  circle(p1.x,p1.y,20);
  circle(p2.x,p2.y,20);
  circle(p3.x,p3.y,20);
  circle(p4.x,p4.y,20);
  bezier(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y);
  
  //push();

  //noStroke();
  //for(let i = 0 ;i < 1 ; i += 0.01)
  //{
  //  fill(i*200,0,200-i*200,i*200);
  //  let px = bezierPoint(p1.x,p2.x,p3.x,p4.x,i);
  //  let py = bezierPoint(p1.y,p2.y,p3.y,p4.y,i);
  //  circle(px,py,i*100);
  //}
  //pop();
}
