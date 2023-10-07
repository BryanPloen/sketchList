let squares = 3;
let hueStrategies = [getComplementary, getAnalogous, getMonochromatic];
let satStrategies = [getHighSat, getLowSat, lerpSat];
let lightStrategies = [lerpLight];

let startSat, startLight;

function setup() {
  createCanvas(innerWidth, innerHeight);
  startSat = random(50, 100);
  startLight = random(20, 80);
  noLoop();
}

function draw() {
  background(0);
  let x = width / 2;
  let y = height / 2;
  let Size = min(innerWidth, innerHeight);
  let hueValue = random(360);
  let satValue = startSat;
  let lightValue = startLight;

  for (let i = 0; i < squares; i++) {
    let hueStrategy = random(hueStrategies);
    let satStrategy = random(satStrategies);
    let lightStrategy = random(lightStrategies);

    let contrastHue = hueStrategy(hueValue);
    let contrastSat = satStrategy(satValue);
    let contrastLight = lightStrategy(lightValue);

    colorMode(HSL);
    fill(contrastHue, contrastSat, contrastLight);
    noStroke()
    rect(x - Size / 2, y - Size / 2, Size);
    
    Size -= 500;
    hueValue = contrastHue;
    satValue = contrastSat;
    lightValue = contrastLight;
  }
}

// Hue Strategies
function getComplementary(hue) {
  return (hue + 180) % 360;
}

function getAnalogous(hue) {
  return (hue + 30) % 360;
}

function getMonochromatic(hue) {
  return hue;
}

// Saturation Strategies
function getHighSat(sat) {
  return min(sat + 20, 100);
}

function getLowSat(sat) {
  return max(sat - 20, 0);
}

function lerpSat(sat) {
  return lerp(sat, 100, 0.2);
}

// Lightness Strategies
function getHighLight(light) {
  return min(light + 20, 100);
}

function getLowLight(light) {
  return max(light - 20, 0);
}

function lerpLight(light) {
  return lerp(light, 0, 0.2);
}

function mousePressed() {
  redraw();
}
