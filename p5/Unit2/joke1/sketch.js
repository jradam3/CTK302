let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(25);
  textAlign(CENTER);
}

function draw() {

  switch(state) {
      case 0:
      background('blue');
      text("Why did the chicken cross the road?", 250, 250);
      break;

      case 1:
      background ('purple');
      text ('To escape the butcher on the other side', 250, 250);
      break;

  }
}

function mouseReleased() {
  state++;

  if (state > 1){
    state = 0;
  }

}
