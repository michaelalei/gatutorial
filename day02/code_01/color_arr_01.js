let aar = [] ;

const a = 5 ;
function setup() {
  createCanvas(1000,1000);
  colorMode(HSB,360,100,100);
  //
  initArr();
}

let w = 80 ;
function initArr()
{
  for(let i = 0 ;i < 10 ; i++)
  {
    let arr = [] ;
    for(let j = 0 ;j < 10 ;j++)
    {
      let pos = createVector(j*90,i*90);
      arr.push(pos);
    }
    aar.push(arr);
  }
}

function draw()
{
  background(0,0,50);
  
  translate(50,50);
  for(let i = 0 ;i < aar.length ; i++)
  {
    let arr = aar[i] ;
    for(let j = 0 ;j < arr.length ;j++)
    {
      let pos = arr[j] ;
      
      let c = color((pos.y/10*3.6),mouseY/1000*100,100-(pos.x/12));
      
      //let c = color(mouseY/1000*360,pos.y/10+10,pos.x/10+10);
      
      fill(c);
      
      rect(pos.x, pos.y, w, w);
    }
  }
  
  //circle(500,500,50);
  
}
