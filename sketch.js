class particle{
  constructor(pos){
    this.location = pos;
    this.velocity = createVector(random(0, 10), random(0, 10));
    this.accceleraion = createVector(0, 0)
  }
  update(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    if(this.location.x <= 0){
      this.location.x = width;
      this.velocity = createVector(random(0,5),random(0,5));
    }else if(this.location.x >= width){
      this.location.x = 0;
      this.velocity = createVector(random(0,5),random(0,5));
    }

    if(this.location.y <= 0){
      this.location.y = height;
      this.velocity = createVector(random(0,5),random(0,5));
    }else if(this.location.y >= height){
      this.location.y = 0;
      this.velocity = createVector(random(0,5),random(0,5));
    }
  }
  show(){
    stroke(0, 0, 255);
    strokeWeight(5);
    point(this.location.x, this.location.y);
    this.acceleration = createVector(noise(this.x, this.y), noise(this.y, this.x));
  }
}
var list = [];
function setup(){
  createCanvas(screen.width, screen.height);
  for(var i = 0; i<50; i++){
    list.push(new particle(createVector(random(10, width - 10), random(10, height - 10))));
  }
}
function draw(){
  background(10, 10, 10, 100);
  for(var i = 0; i<50; i++){
    list[i].show();
    list[i].update();
  }

}