let cars = [];
let bruhFish;
let mainFish;
let backFish;
let enemyFish;
let deadFish;
let winFish;
let frogPos;
let state = 0;
let maxCars = 40;
let timer = 0;

function setup() {
  createCanvas(600, 600);
  backFish = loadImage("assets/bruhBack.png");
  bruhFish = loadImage("assets/1.png");
  mainFish = loadImage("assets/bruhFish.png");
  enemyFish = loadImage("assets/negaBruhFish.png");
  deadFish = loadImage("assets/bruhFishDead.png");
  winFish = loadImage("assets/bruhFishHapp.png");

  textAlign(CENTER);
  rectMode(CENTER);

  frogPos = createVector(width / 2, height - 80);

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {

  switch(state) {

    case 0:
    background(100);
    image(bruhFish, 0, 0, width, height);
    text("Don't Get Hit", width/2, height/2);
    break ;

    case 1:
    game();
    timer++;
    if (timer > 200) {
      state = 3;
    }
    break ;

    case 2:
    background(100);
    image(bruhFishDead, 0, 0, width, height);
    fill('black');
    text("YOU LOSE", width/2, height/2);
    break ;

    case 3:
    background(100);
    image(winFish, 0, 0, width, height);
    fill('blue');
    text("WIN", width/2, height/2);
    break ;
  }

}

  function game() {

      background(100);
      image(backFish, 0, 0, width, height);

      for (let i = 0; i < cars.length; i++) {
        cars[i].display();
        cars[i].move();

        if (cars[i].pos.dist(frogPos) < 50) {
          cars.splice(i, 1);
        }
      }

if (cars.length == 0){
  state = 2; //WIN
}

      //fill ('green');
      //ellipse(frogPos.x, frogPos.y, 50, 50);
      image(mainFish, frogPos.x, frogPos.y, 50, 50);
      checkForKeys();
  }

function resetGame(){
  cars = []; //respawn
  timer = 0;
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function mouseReleased() {
  switch(state){
    case 0:
    state = 1;
    break ;

    case 1:
    break ;

    case 2://win
    resetGame();
    state = 0;
    break ;

    case 3://lose
    resetGame();
    state = 0;
    break ;
  }
}

  function checkForKeys() {
    if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5 ;
    if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5 ;
    if (keyIsDown(UP_ARROW)) frogPos.y -= 5 ;
    if (keyIsDown(DOWN_ARROW)) frogPos.y += 5 ;
  }


  class Car{

      constructor() {
        this.pos = createVector(100, 100);
        this.vel = createVector(random(-6, 6), random(-6, -6));
        this.size = random(60, 100);
        this.c = color(random(100, 255), random(50));
      }

      display(){
        //textSize(this.size);
        //fill(this.c);
        //text('bruh', this.pos.x, this.pos.y);
        image(enemyFish, this.pos.x, this.pos.y, 50, 50);
      }

      move() {
        this.pos.add(this.vel);
        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;
      }
  }
