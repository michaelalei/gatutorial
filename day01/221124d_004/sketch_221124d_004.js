
function setup() {
  createCanvas(1000,1000);
  frameRate(1);  
}

function draw() 
{
  drawLines();
}

function drawLines()
{
  background(200);
  let arrPt = [] ;
  let np = ~~random(100,400) ;
  
  for(let i = 0 ; i < np ; i++)
  {
    let x1 = random(width);
    let y1 = random(height);
    arrPt.push({x:x1, y:y1});
  }
  
  let maxDis = 300 ;
  
  for(let i = 0 ;i < arrPt.length ; i++)
  {
     let pA = arrPt[i] ;
     for(let j = i+1 ; j <arrPt.length; j++)
     {
       pB = arrPt[j];
       let d = sqrt(pow(pA.x-pB.x,2)+pow(pA.y-pB.y,2));
       console.log("d: ",d);
       console.log("x: ",sqrt(pow(pA.x-pB.x,2)));
       console.log("y: ",sqrt(pow(pA.y-pB.y,2)));
       if(d < maxDis)
       {
         let ala = map(d, 0, maxDis, 255, 0);
         let w   = map(d, 0, maxDis, 2, 0);
         //stroke(random(0,255),0,0,ala);
         strokeWeight(w);
         line(pA.x, pA.y, pB.x, pB.y);
       }
     }
  }
}

function drawhis()
{
  background(220);
  
  let xn = 18 ;
  let yn = 10 ;
  let w = 80  ;
  
  for(let i = 0 ; i < yn ; i++)
  {
    for(let j = 0 ; j < xn ; j++)
    {
      fill(random(255),0,0);
      push();
      let x = j*w + 20;
      let y = i*w + 100;
      let angle = random(-PI/30*i,PI/30*i);
      translate(x,y);
      rotate(angle);
      rect(0,0,70,70);
      pop();
    }
  }
}

function dkd()
{
  background(200);
  
  let n = ceil(random(5,15));
  for(let i = 0 ; i < n ; i++)
  {
    let r = int(random(3));
    let c = color(random(50,250),0,random(50,250));
    let x = random(100,900);
    let y = random(100,900);
    
    fill(c);
    if(r == 0)
    {
      rect(x,y, random(200,600),random(200,600));
    }
    else if( r == 1 )
    {
      circle(x,y,random(200,500));
    }
    else
    {
      let x2 = random(100,900);
      let y2 = random(100,900);
      let x3 = random(100,900);
      let y3 = random(100,900);
      triangle(x,y,x2,y2,x3,y3);
    }
  }
}
