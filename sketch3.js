p5.disableFriendlyErrors = true;
class Point{
  constructor(x, y, z){
    this.location = createVector(x, y, z)
  }
  show(x, y){
    var focus = 25
    push();
    stroke(0, 255, 0, 100)
    strokeWeight(5)
    point(this.location.x  * focus / this.location.z, this.location.y * focus/ this.location.z)
    line(this.location.x  * focus / this.location.z, this.location.y * focus/ this.location.z, x, y)
    // print(this.location.x  * focus / this.location.z, this.location.y * focus/ this.location.z, x, y)
    pop();
  }
  move_y(angle){
    //moves about y-axis by angle theta
    var theta = angle
    var alpha = atan2(this.location.x, this.location.z)
    this.location.x *= cos(theta + alpha) / cos(alpha)
    this.location.z *= sin(theta + alpha) / sin(alpha)
    // console.log(atan2(this.z, this.x))
  }
  move_x(angle){
    //moves about y-axis by angle theta
    var theta = angle
    var alpha = atan2(this.location.y, this.location.z)
    this.location.y *= cos(theta + alpha) / cos(alpha)
    this.location.z *= sin(theta + alpha) / sin(alpha)
    // console.log(atan2(this.z, this.x))
  }
}

var group = []

function setup(){
  createCanvas(screen.width, screen.height);

  group.push(new Point(1, 1, 1))
  group.push(new Point(1, 1, -1))
  group.push(new Point(1, -1, -1))
  group.push(new Point(1, -1, 1))
  group.push(new Point(-1, -1, 1))
  group.push(new Point(-1, -1, -1))
  group.push(new Point(-1, 1, -1))
  group.push(new Point(-1, 1, 1))
  for(let p of group){
    p.location.mult(100);
    p.location.z -= 30
  }
}
function draw(){
translate(width /2 , height / 2)
  background(10, 10, 10, 100);
  if(frameCount % 10 == 0){
    background(10)
  }
  var v = group[7]
  var focus = 25
  for(let p of group){
    p.move_y(map(mouseX / width, 0, 1, -PI, PI));
    p.move_x(map(mouseY / height, 0, 1, -PI, PI));
    p.show(v.location.x  * focus / v.location.z, v.location.y * focus/ v.location.z);
    v = p;
  }
  group = []
  group.push(new Point(1, 1, 1))
  group.push(new Point(1, 1, -1))
  group.push(new Point(1, -1, -1))
  group.push(new Point(1, -1, 1))
  group.push(new Point(-1, -1, 1))
  group.push(new Point(-1, -1, -1))
  group.push(new Point(-1, 1, -1))
  group.push(new Point(-1, 1, 1))
  for(let p of group){
    p.location.mult(100);
    p.location.z -= 30
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
