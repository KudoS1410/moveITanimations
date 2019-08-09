class particle{
  constructor(pos){
    this.location = pos;
    this.velocity = createVector(random(-10, 10), random(-10, 10));
    this.accceleraion = createVector(0, 0)
  }
  update(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    if(this.location.x <= 0){
      // this.location.x = width;
      // this.velocity = createVector(random(0,5),random(0,5));
      this.reset()
    }else if(this.location.x >= width){
      // this.location.x = 0;
      // this.velocity = createVector(random(0,5),random(0,5));
      this.reset()
    }

    if(this.location.y <= 0){
      // this.location.y = height;
      // this.velocity = createVector(random(0,5),random(0,5));
      this.reset()
    }else if(this.location.y >= height){
      // this.location.y = 0;
      // this.velocity = createVector(random(0,5),random(0,5));
      this.reset()
    }
  }
  reset(){
    this.location = createVector(random(10, width - 10), random(10, height - 10))
    // this.location = createVector(random(0.3 * width, 0.7 * width), random(0.3 * height, 0.7 * height))
    // this.velocity = createVector(random(-10, 10), random(-10, 10))
    this.velocity = createVector(map(noise(this.location.y, this.location.x), 0, 1, -5, 5), map(noise(this.location.x, this.location.y), 0, 1, -5, 5));
  }
  show(){
    stroke(0, 0, 255);
    strokeWeight(5);
    point(this.location.x, this.location.y);
    this.acceleration = createVector(map(noise(this.location.x, this.location.y), 0, 1, -1, 1), map(noise(this.location.y, this.location.x), 0, 1, -1, 1));
  }
}
let x = 1
let y = 1
let easing = 1
var list = [];
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
function setup(){
  createCanvas(screen.width, screen.height);
//   createCanvas(414, 736)
  if(isMobile){
    var n = 20
    easing = 1
  }
  else{
    var n = 50;
    easing = 1.5;
  }
  for(var i = 0; i<n; i++){
    list.push(new particle(createVector(random(10, width - 10), random(10, height - 10))));
    // list.push(new particle(createVector(random(0.3 * width, 0.7* width), random(0.3 * height, 0.7 * height))));
  }
  frameRate(50)
//   console.log(width, height)
//   console.log(n)
}
function draw(){
  background(10, 10, 10, 100);
  if(frameCount % 10 == 0){
    background(10, 10, 10)
  }
    list.push(new particle(createVector(mouseX, mouseY)))
    for(var i=0;i<list.length;i++){
    list[i].show();

    for(var j=0;j<list.length;j++){
      var distance = dist(list[i].location.x,list[i].location.y,list[j].location.x,list[j].location.y);
      strokeWeight(0.5);

      if(distance<200){
        var lineAlpha = map(distance,0,200,255,0);
        if(i == list.length -1 || j == list.length-1){
          stroke(255,0, 0,lineAlpha);
          strokeWeight(2)
        }
        else{
          stroke(255, 255, 255, lineAlpha)
        }
        line(list[i].location.x,list[i].location.y,list[j].location.x,list[j].location.y);
      }
    }
    list[i].update();
  }
  stroke(255, 0, 0);
  strokeWeight(5);
  // ellipse(mouseX, mouseY, 20, 20)
  point(mouseX, mouseY);
  list.pop()
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;
  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing ;
  fill(255)
  ellipse(x, y,20, 20);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
