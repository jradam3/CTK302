let cars = [];
var img1;

function setup() {
  createCanvas(500, 500);

  img1 = loadImage('assets/1.png');
  noStroke();
}

function draw() {
  background(500);
  image(img1, 500, 500, 400, 200);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1) ;
    }
  }
}


class Car{

    constructor() {
      this.pos = createVector(width / 2, height - 80);
      this.vel = createVector(random(-0.8, 0.8), random(-10, -5));
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
      this.a = random(255);
    }

    display(){
      fill(this.r, this.g, this.b, this.a);
      text('words', this.pos.x, this.pos.y, 20);
    }

    move() {
      this.pos.add(this.vel);
      this.a = this.a - 5;
    }
}
