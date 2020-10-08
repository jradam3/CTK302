var img1, img2, img3;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(800, 800);

  img1 = loadImage('assets/1.png');
  img2 = loadImage('assets/2.png');
  img3 = loadImage('assets/3.png');

    imageMode(CENTER)
}

function draw() {

  switch(state) {
      case 0:
      background(100);
      image(img1, 800, 800);

      timer = timer + 1;
      if (timer > 5 * 60){
        state = 1;
      timer = 0;
      }
      break;

      case 1:
      background ('black');
      image(img2, 800, 800);

      timer = timer + 1;
      if (timer > 5 * 60){
        state = 2;
      timer = 0;
      }
      break;

      case 2:
      background ('red');
      image(img3, 800, 800);
      timer = timer + 1;
      if (timer > 5 * 60){
        state = 0;
      timer = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;

  if (state > 2){
    state = 0;
  }

}
