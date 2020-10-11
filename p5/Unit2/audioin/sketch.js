var mic;
var vol;
var y = 0 ;
var c = 'green' ;

function setup() {
  createCanvas(400, 400);

  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);

  vol = (mic.getLevel()).toFixed(2);

  if (vol > .01) {
  c = color(random(255), random(255), random(255)) ;
  }


  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


function touchStarted() {
  getAudioContext().resume();
}
