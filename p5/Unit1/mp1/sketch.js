function setup() {
  createCanvas(400, 400);
}

function draw() {

  if (mouseIsPressed) {
    background('darkblue');
  } else {
    background('lightblue');
  }

  if (mouseIsPressed) {
    fill('orange');
    ellipse(300, 0, 300, 300);
  } else {
    fill('yellow');
    ellipse(300, 0, 300, 300);
  }

  fill('darkgreen');
  ellipse(100, 280, 200);

  fill('darkgreen');
  ellipse(450, 280, 300);

  fill(100, 200, 80);
  rect(0, 360, 720, 40);

  fill('white');
  rect(150, 200, 120, 200);


  fill('white')
  ellipse(200, 200, 200, 200);


  if (mouseIsPressed) {
    fill('black')
    arc(200, 210, 130, 100, 0, 0);
    fill('red')
    ellipse(170, 180, 40, 40);
    ellipse(230, 180, 40, 40);
  } else {

    fill('black')
    ellipse(170, 180, 40, 40);
    ellipse(230, 180, 40, 40);
  }



  fill('white');

  if (mouseIsPressed) {
    text("But, when he's threatened,", 10, 10)
    text("he goes into rage mode", 10, 20);
    text("because those who cross", 10, 30);
    text("him are unaware of one thing.", 10, 40);
    text("He's part DEMON!!!", 10, 50);
  } else {

    text("This is Micah, a normal", 10, 10);
    text("everyday teen who", 10, 20);
    text("just simply wants to get on", 10, 30);
    text("with his boring life.", 10, 40);

  }
}