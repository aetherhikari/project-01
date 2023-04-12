let pg;

function setup() {
  createCanvas(710, 400);
  pg = createGraphics(400, 250);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  fill(155,55,203);
  noStroke();
  if (mouseIsPressed) {
    fill(230,15,220);
    noStroke();
  } else {
    fill(220, 12)
    noStroke();
  }
  ellipse(mouseX, mouseY, 60, 60);

  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);

  image(pg, 150, 75);
}

function frame () {
  
}