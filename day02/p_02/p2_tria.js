
var BLUE, RED;
var tris;

function setup() {
  createCanvas(1000, 1000);

  BLUE = color('#1E2630');
  RED = color('#FB3550');

  //noLoop();
  initializeTriangulation();
}

function initializeTriangulation() {
    tris = [];
    var pts = [];
    // push canvas rect points
    pts.push(createVector(0, 0));
    pts.push(createVector(width, 0));
    pts.push(createVector(width, height));
    pts.push(createVector(0, height));

    // add a certain nb of pts proportionally to the size of the canvas
    // ~~ truncates a floating point number and keeps the integer part, like floor()
    var n = ~~(width / 300 * height / 300);
    for (var i = 0; i < n; i++) {
        pts.push(createVector(~~random(width), ~~random(height)));
    }
    let tri = Delaunay.triangulate(pts);

    // Now, let's use Delaunay.js
    // Delaunay.triangulate expect a list of vertices (which should be a bunch of two-element arrays, representing 2D Euclidean points)
    // and it will return you a giant array, arranged in triplets, representing triangles by indices into the passed array
    // Array.map function let us create an Array of 2 elements arrays [ [x,y],[x,y],..] from our array of PVector [ PVector(x,y), PVector(x,y), ... ]
    var triangulation = Delaunay.triangulate(pts.map(function(pt) {
        return [pt.x, pt.y];
    }));
    

    // create Triangles object using indices returned by Delaunay.triangulate
    for (let i = 0; i < triangulation.length; i += 3) {
        tris.push(new Triangle(pts[triangulation[i]], pts[triangulation[i + 1]], pts[triangulation[i + 2]]));
    }

}


function initializeTriangulation2() {
  tris = [];
  var pts = [];
  // push canvas rect points
  pts.push(createVector(0, 0));
  pts.push(createVector(width, 0));
  pts.push(createVector(width, height));
  pts.push(createVector(0, height));

  // add a certain nb of pts proportionally to the size of the canvas
  // ~~ truncates a floating point number and keeps the integer part, like floor()
  var n = ~~(width / 300 * height / 300);
  for (var i = 0; i < n; i++) {
    pts.push(createVector(~~random(width), ~~random(height)));
  }
  console.log(pts);
    //var t1 = Delaunay.triangulate(pts.map(function(pt) {
    //    return [pt.x,pt.y];
    //}));
    //console.log(pts);
  // Now, let's use Delaunay.js
  // Delaunay.triangulate expect a list of vertices (which should be a bunch of two-element arrays, representing 2D Euclidean points)
  // and it will return you a giant array, arranged in triplets, representing triangles by indices into the passed array
  // Array.map function let us create an Array of 2 elements arrays [ [x,y],[x,y],..] from our array of PVector [ PVector(x,y), PVector(x,y), ... ]
  let tri = Delaunay.triangulate(pts);

  console.log(tri);

  console.log(tri[0].p1.x);
  console.log(tri[0].p1.y);
  let triangulation = [];
  for(let i = 0 ;i < tri.length ; i++)
  {
    triangulation.push({x:tri[i].p1.x,y:tri[i].p1.y});
    triangulation.push({x:tri[i].p2.x,y:tri[i].p2.y});
    triangulation.push({x:tri[i].p3.x,y:tri[i].p3.y});
  }
  //console.log(triangulation);
  //console.log(triangulation[0]);
  
  // create Triangles object using indices returned by Delaunay.triangulate
  for (i = 0; i < tri.length; i ++) {
    //tris.push(new Triangle(triangulation[i], triangulation[i + 1], triangulation[i + 2]));
    tris.push(new Triangle(tri[i].p1,tri[i].p2,tri[i].p3));
  }
  console.log(tris);
}

// class for keeping triangles from 3 PVectors
function Triangle(_a, _b, _c) {
  // PVectors
  this.a = _a;
  this.b = _b;
  this.c = _c;

  // used for fill using lerpColor
  this.r = random(0.8);

  // used for drawing lines on triangles
  // number of lines to draw proportionnally to the triangle size
  this.n = ~~(dist(_a.x, _a.y, (this.b.x + this.c.x) / 2, (this.b.y + this.c.y) / 2) / random(25, 50)) + 1;
  // direction point for the lines
  this.drawTo = ~~random(3);

  this.draw = function() {
    
    noStroke();
    fill(lerpColor(RED, BLUE, this.r));
    //fill(255);
    //circle(this.a.x,this.a.y,20,20);
    triangle(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y);

    switch (this.drawTo) {
    case 0:

      this.drawLines(this.a, this.b, this.c);
      break;
    case 1:

      this.drawLines(this.c, this.a, this.b);
      break;
    case 2:

      this.drawLines(this.b, this.a, this.c);
      break;
    }

    stroke(BLUE);
    strokeJoin(BEVEL);
    strokeWeight(15);
    noFill();
    //console.log(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y);
    triangle(this.a.x, this.a.y, this.b.x, this.b.y, this.c.x, this.c.y);
  };

  this.drawLines = function(from, to1, to2) {
    var c = cos(frameCount / 360 * TWO_PI) / 2;
    for (var i = 1; i <= this.n; i++) {
      var p1 = createVector(lerp(from.x, to1.x, (i - 1) / this.n), lerp(from.y, to1.y, (i - 1) / this.n));
      var p2 = createVector(lerp(from.x, to2.x, (i - 1) / this.n), lerp(from.y, to2.y, (i - 1) / this.n));
      var p3 = createVector(lerp(from.x, to2.x, (i - 0.5 + c) / this.n), lerp(from.y, to2.y, (i - 0.5 + c) / this.n));
      var p4 = createVector(lerp(from.x, to1.x, (i - 0.5 + c) / this.n), lerp(from.y, to1.y, (i - 0.5 + c) / this.n));

      //line( p1.x, p1.y, p2.x, p2.y );

      noStroke();
      fill(BLUE);
      //stroke(BLUE);
      quad(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
    }
  };
}

function draw()
{

  background(0);
  console.log(frameCount);
  for(let i = 0 ;i < tris.length ; i++)
  {
    //console.log(tris[i]);

    tris[i].draw();

  }

  if (frameCount % 720 == 0) 
  {
     initializeTriangulation();
  }
}

//function mousePressed() {
//  initializeTriangulation();
//}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//  initializeTriangulation();
//}
