var img1, img2, img3;
let numberOfTouches = 0;

function setup() {
  createCanvas(400, 400);

  img1 = loadImage('assets/1.jpg');
  img2 = loadImage('assets/2.jpg');
  img3 = loadImage('assets/3.jpg');

    imageMode(CENTER)
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
        text("no one is touching the screen", 5, 22) ;
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
       image(img1, width/2, height/2, 400, 200);
      break ;

      case 2:
        text("two fingers are touching the screen", 5, 22) ;
        image(img2, width/2, height/2, 400, 200);
      break ;

      case 3:
        text("three are touching the screen", 5, 22) ;
        image(img3, width/2, height/2, 400, 200);
      break ;


  }

}
