function setup() {
  createCanvas(1500,1000);
  frameRate(1);
}

function draw() {
  background(200);
  
  let nx = 15 ;
  let ny = 10 ;
  let w = 80 ;
  
  for(let i = 0 ; i < ny ;  i++)
  {
    for(let j = 0 ; j < nx ; j++)
    {
      push();
      fill(random(255),0,0);
      fill(random(100,255),0,0);
      translate(50,50);

      let x = j * 90 ;
      let y = i * 90 ;
      
      translate(x,y);
      rotate(random(-PI/70*j,PI/70*j));
      rect(0,0, w, w);
      pop();
    }
  }
}
