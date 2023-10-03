let cols = 3;
let rows = 3;
let margin = 100;
let gap = 0;
let gridWidth = cols * 250;
let gridHeight = rows * 250;
let functions = [func1, func2, recursiveEllipse, recursiveEllipse2,recursiveEllipse3];

function setup() {
  createCanvas(gridWidth, gridHeight);
  noLoop();
  ellipseMode(CORNER);
}

function draw() {
  background(240);
  drawGrid(margin, gap, rows, cols, gridWidth, gridHeight);
  drawGrid2(margin, gap, rows, cols, gridWidth, gridHeight);
}

function recursiveEllipse(x, y, w, h, depth) {
  
  
  if (w > 30) {
    
    noFill();
    strokeWeight(2);
    stroke(0);
    ellipse(x, y, w, h);
    recursiveEllipse(x + 10, y +10, w-20, h-20, depth - 1);
  }
}

function drawGrid(margin, gap, rows, cols, gridWidth, gridHeight) {
  let cellWidth = (gridWidth - margin * 2 - gap * (cols - 1)) / cols;
  let cellHeight = (gridHeight - margin * 2 - gap * (rows - 1)) / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = margin + i * (cellWidth + gap);
      let y = margin + j * (cellHeight + gap);

      fill(255);
      let chance = random(functions);
      chance(x, y, cellWidth, cellHeight, 100);
    }
  }
}

function drawGrid2(margin, gap, rows, cols, gridWidth, gridHeight) {
  let cellWidth = (gridWidth - margin * 2 - gap * (cols - 1)) / cols;
  let cellHeight = (gridHeight - margin * 2 - gap * (rows - 1)) / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = margin + i * (cellWidth + gap);
      let y = margin + j * (cellHeight + gap);

      fill(255,0,0);
      
      let r = random()> 0.8 ? ellipse(x, y, cellWidth, cellHeight): 0;
    }
  }
}

function func1(x, y, w, h) {
  noStroke()
  fill(240);
  ellipse(x, y, w, h);
  fill(255,0,0);
  noStroke()
  ellipse(x + w / 4, y + w / 4, w / 2, h / 2);
}

function func2(x, y, w, h) {
  fill(240)
  noStroke()
  ellipse(x, y, w, h);
}

function recursiveEllipse2(x, y, w, h, depth) {
  
  
  if (depth >= 0) {
    
    fill(240);
    noStroke()
    ellipse(x, y, w, h);
    recursiveEllipse2(x + 2, y, w, h, depth - 1);
  }
}
function recursiveEllipse3(x, y, w, h, depth) {
  
  
  if (depth >= 0) {
    
    fill(0);
    noStroke()
    ellipse(x, y, w, h);
    recursiveEllipse3(x - 2, y, w, h, depth - 1);
  }
}
