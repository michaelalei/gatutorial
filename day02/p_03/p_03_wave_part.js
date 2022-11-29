
let parts = [];
let numParts = 500 ;
// tail long
let magnity = 0.2 ;
// tail long speed
let speed = 0.01 ;
let colorRandom = [] ;
let weights = [];

//style motion
let alpha = 0.1 ;

function setup() {
  createCanvas(1500,1000);
  frameRate(30);
  colorMode(HSB);
  background(255,0,100);
  h1 = random(100,355);
  h2 = h1 - 150 ;
  colorRandom = [color(h2+random(0,10),67,34,alpha),
                 color(h2,24,86,alpha),
                 color(h1,75,80,alpha),
                 color(h2+random(0,10),56,62,alpha),
                 color(h1+random(0,10),93,40,alpha),
                 color(h1+random(0,10),87,64,alpha)];

  weights = [1,1,0.1,4,3,2];
  


  fill(h2+random(0,10),90,98,0.01);
  //rect(width/3,0,width/3,height);
  initParts();

}

function initParts()
{
  for(let i = 0 ; i < numParts ; i++)
  {
    //let newP = new MyPart(random(width/3,width*2/3),random(height));
    let newP = new MyPart(random(0,width),random(height));
    parts.push(newP);
  }
}

function draw() {
  for(let i = 0 ; i < parts.length ; i++)
  {
    let par = parts[i];
    par.update();
    if( frameCount % 100 > 99 )
    {
      continue;
    }
    par.display();
  }
  magnity += speed ;
  
  {
    console.log(magnity);
  }

}

class MyPart
{
  constructor(x, y)
  {
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.weight = random(weights)*4;
    this.color = random(colorRandom);
    this._noiseZ = 0 ;
  }
  
  update()
  {
    let noiseScale = 0.001;
    let noiseStren = 8 ;
    let xoffset = 1 ;
    let yoffset = 2 ;
    
    let noiseValue = noise(this.pos.x*noiseScale+xoffset,this.pos.y*noiseScale+yoffset);
    
    let ang = noiseValue*2*PI*noiseStren ;
    
    this.pos.x += cos(ang)*magnity ;
    this.pos.y += sin(ang)*magnity ;
    
    if(this.weight > 0.1)
    {
      this.weight -= 0.03 ;
    }
  }
  
  display()
  {
    fill(this.color);
    noStroke();
    //noFill();
    //stroke(this.color);
    rect(this.pos.x, this.pos.y, this.weight, this.weight,3);
    //circle(this.pos.x, this.pos.y, this.weight) ;
  }
}
