
let pts = [] ;
let trias = [] ;
var palette;
var colors;
let n = 10 ;

function setup() {
  createCanvas(1000,1000);
  
  for(let i = 0 ;i < n ; i++)
  {
    pts.push([random(100,900),random(100,900)]);
  }
  
  trias = Delaunay.triangulate(pts);
  
  
  palette = [];
  palette = createCols(URL[0])
  
  colors = [];
  for(let i = 0 ;i < trias.length ; i++)
  {
    colors.push(shuffle(palette)[0]);
  }

  frameRate(1);
}


function draw() {
  background("#F6F2E9");
  //BeginShape();
  for (let i = 0; i < trias.length; i++) 
  {
    let p1 = trias[i][0];
    let p2 = trias[i][1];
    let p3 = trias[i][2];
    
    fill(colors[i]);
    stroke(0);
    beginShape();
    vertex(pts[p1][0],pts[p1][1]);
    vertex(pts[p2][0],pts[p2][1]);
    vertex(pts[p3][0],pts[p3][1]);
    endShape(CLOSE);
  }
}

const URL  = [
    "https://coolors.co/bc4250-33302c-824e37-6c546a-ddb305-cd4414-d5d2c9-1d7fa4-66752e-a33431-5c7379"
  ];

function createCols(url)
{

  console.log(url);
  let slaIndex = url.lastIndexOf("/");
  let colStr = url.slice(slaIndex + 1);
  let colArr = colStr.split("-");
  for(let i = 0; i < colArr.length; i++)colArr[i] = "#" + colArr[i];
  return colArr;
}
