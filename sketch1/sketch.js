function setup() {
  createCanvas(innerWidth, innerHeight);

  for(i = 0; i < 1000; i++){

    strokeWeight(random(10,50))
    stroke(random(360))
    point(random(width), random(height))
  }
}
