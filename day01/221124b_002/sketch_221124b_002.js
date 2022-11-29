
function setup() {
  createCanvas(1000,1000);
  background(200);
  stepC();
  //frameRate(1);
}

function draw() {

}

function stepC()
{
  let n = int(random(10,20)) ;
  
  for(let i = 0 ;i < n ; i++)
  {
    let x = random(100,900);
    let y = random(100,900);
    let r1 = random(100,300);
    let r2 = random(200,600);
    
    fill(random(200));
    let rnd = floor(random(3));
    if(rnd == 0)
    {
      circle(x,y,r1);
    }
    else if(rnd == 1)
    {
      rect(x,y,r1,r2);
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

function stepB()
{
  let n = 10 ;
  
  for(let i = 0 ;i < n ; i++)
  {
    let x = random(100,900);
    let y = random(100,900);
    let r = random(50,100) ;
    
    circle(x,y,r);
  }
}

function stepA()
{
  let n = 10 ;
  
  for(let i = 0 ;i < n ; i++)
  {
    let x = i * 80 + 100;
    let y = i * 80 + 100;
    let r = 100 ;
    
    circle(x,y,r);
  }
}
