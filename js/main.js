var canvas, canvasContext;

var blueCar = new Car();
var greenCar = new Car();

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  colorRect(0, 0, canvas.width, canvas.height, 'black');
  colorText("Loading...", canvas.width/2, canvas.height/2, 'white');

  loadImages();
}

function startGame() {
  var framesPerSecond = 30;
  setInterval(updateAll, 1000/framesPerSecond);

  setupInput();

  loadLevel(levelOne);
}

function loadLevel(level) {
  trackGrid = [...level];
  greenCar.reset(car2Image, "Green Machine");
  blueCar.reset(carImage, "Blue Storm");
}

function updateAll() {
  moveAll()
  drawAll()
}

function moveAll() {
  greenCar.move();
  blueCar.move();
}

function drawAll() {
  drawTracks();
  greenCar.draw();
  blueCar.draw();
}
