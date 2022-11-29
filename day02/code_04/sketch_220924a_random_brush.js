let pars = [];

//P1 part NUM 500~3000
let PN = 1000 ;
//P2 al NUM (0.3,0.5)(0.5,0.7)(0.7,0.9)
let alpha = 1 ;
//P3 Shape
//rect, circle, triangle
//let shapeType = 0 ;
//P4 lineType
//let strokeType = 0 ;
//line, rect, circle, triangle

let brushType = 0 ;//1~7
//P5, pallete = 6
//p6, background = 6



function initParam()
{
  PN = getPartNum();
  let {amin,amax} = getAlphaRange();
  alpha = random(amin,amax);
  brushType = getBrushType();
  
  console.log(PN);
  console.log(amin,amax);
  console.log(brushType);
}

function getBrushType()
{
  let r = int(random(7))+1;
  return r ;
}

function setup() {
  initParam();
  
  
  createCanvas(1000,1000);
  background(250);
  
  colorMode(HSB);
  let h1 = random(120,355);
  let h2 = h1 - 120 ;

  cR = [color(h2,67,34,alpha),
                 color(h2,24,86,alpha),
                 color(h1,75,80,alpha),
                 color(h2,56,62,alpha),
                 color(h1,93,40,alpha),
                 color(h1,87,64,alpha)];
                 
  for(let i = 0 ;i < PN ; i++)
  {
    pars.push(new Part(random()*width,random()*height,random(cR)));
  }
}


function draw() {
  
  for(let part of pars )
  {
    part.update();
    part.show();
  }
}

class Part
{
  constructor(x,y,col)
  {
    this.x = x ;
    this.y = y ;
    this.color = col ;
    this.weight = random(30) ;
    this.count = 0 ;
    this.angle = random(PI); 
  }
  
  update()
  {
    this.x += random(-5,5);
    this.y += random(-30,30);
    if(this.weight > 0.02)
    {
      this.weight -= 0.1 ;
    }
  }
  
  show()
  {
    if(this.weight < 0.03)
    {
      this.count ++ ;
      if(this.count > 50)
      {
        return ;
      }
    }
    
    if(brushType < 4)
    {
      noStroke();
      fill(this.color);
    }
    else
    {
      stroke(this.color);
      noFill();
    }
    
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    //circle(0,0,this.weight);
    //rect(0,0,this.weight*2,this.weight*0.5,1);
    //triangle(0,0,this.weight,0,0,0-this.weight);
    if(brushType == 4)
    {
       line(0,0,this.weight,this.weight);
    }
    else if(brushType == 5 || brushType == 1)
    {
      circle(0,0,this.weight);
    }
    else if(brushType == 6 || brushType == 2)
    {
      rect(0,0,this.weight*2,this.weight*0.5,1);
    }
    else if(brushType == 7 || brushType == 3)
    {
      triangle(0,0,this.weight,0,0,0-this.weight);
    }

    pop();

    //circle(this.x,this.y,this.weight);

    //triangle(this.x,this.y,this.x+this.weight,this.y,this.x,this.y-this.weight);
    //line(this.x,this.y,this.x+this.weight*sin(this.angle),this.y+this.weight*cos(this.angle));

  }
}

function testRect()
{
  push();
  fill(0);
  translate(200,200);
  rect(0,0,200,200);
  pop();
}
