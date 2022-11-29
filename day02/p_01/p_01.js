
let n = 72 ;
let carr = [] ;
function setup() {
  createCanvas(1000,1000);
  strokeCap(SQUARE);
  colorMode(HSB,360,100,100);
  background(0,0,90);
  
  for(let i = 0 ;i < n ; i++)
  {
    carr.push(5*i);
  }
}


function draw() {
  //drawLineColor();
  drawArcColor2();
  //drawColor();
}


function drawArcColor2()
{
  noFill();
  strokeWeight(25);
  translate(width/2,height/2);
  scale(1.5);
  for(let k = 0 ;k < 8 ; k++)
  {
    for(let i = 0 ;i < n ; i++)
    {
      let c = carr[i] ;
      //fill(c,80,90);
      stroke(c,100,10+k*15);
      //stroke(c,10+k*10,80);
      let sP = 2*PI/n*i + PI;
      let eP = 2*PI/n*(i+1) + PI;
      arc(0,0,50+k*40,50+k*40,sP,eP);
    }  
  }
  
    strokeWeight(50);
  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,90,90);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,400,400,sP,eP);
  }
  strokeWeight(25);
  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,30,90);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,450,450,sP,eP);
  }
  //  return ;
  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,65,65);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,500,500,sP,eP);
  }
  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,90,40);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,550,550,sP,eP);
  }

}


function drawArcColor()
{
  noFill();
  strokeWeight(50);
  translate(width/2,height/2);

  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,90,20);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,50,50,sP,eP);
  }
  
  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,90,50);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,100,100,sP,eP);
  }
  
  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,90,70);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,200,200,sP,eP);
  }
  
  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,90,90);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,300,300,sP,eP);
  }
  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,60,90);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,400,400,sP,eP);
  }
  
  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,30,90);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,500,500,sP,eP);
  }
  for(let i = 0 ;i < n ; i++)
  {
    let c = carr[i] ;
    //fill(c,80,90);
    stroke(c,10,90);
    let sP = 2*PI/n*i + PI;
    let eP = 2*PI/n*(i+1) + PI;
    arc(0,0,600,600,sP,eP);
  }

}

function drawLineColor()
{
  translate(80,200);
  
  let y = 0 ;
  let x = 0 ;
  for(let i = 0 ;i < n ; i++)
  {
    x++ ;
    if(i % 12 == 0)
    {
      //translate(0,150);
      y = y + 150 ;
      x = 0 ;
    }
    let c = carr[i] ;
    fill(c,mouseX/10,mouseY/10);
    rect(x*70,y,60,60);
  }
}
function drawLineColor2()
{
  
  translate(100,0);
  
  let y = 0 ;
  let x = 0 ;
  let s = 100 ;
  let b = 120 ;
  for(let i = 0 ;i < n ; i++)
  {
    x++ ;
    if(i % 12 == 0)
    {
      //translate(0,150);
      y = y + 100 ;
      x = 0 ;
      s -= 20 ;
      //b -= 20 ;
    }
    let c = carr[x] ;
    fill(c,s,b);
    rect(x*70,y,60,60);
  }
  
   translate(0,300);
   y = 0 ;
   x = 0 ;
   s = 100 ;
   b = 120 ;
  for(let i = 0 ;i < n ; i++)
  {
    x++ ;
    if(i % 12 == 0)
    {
      //translate(0,150);
      y = y + 100 ;
      x = 0 ;
      //s -= 20 ;
      b -= 20 ;
    }
    let c = carr[x] ;
    fill(c,s,b);
    rect(x*70,y,60,60);
  }
  
   translate(0,300);
   y = 0 ;
   x = 0 ;
   s = 100 ;
   b = 120 ;
  for(let i = 0 ;i < n ; i++)
  {
    x++ ;
    if(i % 12 == 0)
    {
      //translate(0,150);
      y = y + 100 ;
      x = 0 ;
      s -= 20 ;
      b -= 20 ;
    }
    let c = carr[x] ;
    fill(c,s,b);
    rect(x*70,y,60,60);
  }
  
}

let hue = 0 ;
function drawColor()
{
  hue++;
  if(hue > 360)
    hue = 0 ;
  translate(200,200);
  fill(hue,mouseY/height*100,mouseX/width*100);
  rect(0,0,500,500);
}
