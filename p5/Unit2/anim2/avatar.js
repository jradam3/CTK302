function avatar() {

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

}
