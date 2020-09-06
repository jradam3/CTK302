var f;
var f1;

function setup() {
  createCanvas(800, 800);

  f = loadFont('assets/abduction2002.ttf');
  f1 = loadFont('assets/abduction2002.ttf');

  textAlign(CENTER);
}

function draw() {
  background(100) ;

  textFont(f);
  textSize(50);
  text('WELCOME', width/2, height/2);

  textFont(f1);
  textSize(80);
  text('To The Future', width/2, height/2 + 90);
}
