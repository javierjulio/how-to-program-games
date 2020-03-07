const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_RIGHT_ARROW = 39;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
  canvas.addEventListener('mousemove', updateMousePosition);

  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);

  greenCar.controlKeyUp = KEY_W;
  greenCar.controlKeyDown = KEY_S;
  greenCar.controlKeyLeft = KEY_A;
  greenCar.controlKeyRight = KEY_D;

  blueCar.controlKeyUp = KEY_UP_ARROW;
  blueCar.controlKeyDown = KEY_DOWN_ARROW;
  blueCar.controlKeyLeft = KEY_LEFT_ARROW;
  blueCar.controlKeyRight = KEY_RIGHT_ARROW;
}

function keySet(car, key, value) {
  if (key == car.controlKeyLeft) {
    car.keyHeld_TurnLeft = value
  }
  if (key == car.controlKeyRight) {
    car.keyHeld_TurnRight = value
  }
  if (key == car.controlKeyUp) {
    car.keyHeld_Gas = value
  }
  if (key == car.controlKeyDown) {
    car.keyHeld_Reverse = value
  }
}

function keyDownHandler(event) {
  keySet(greenCar, event.keyCode, true)
  keySet(blueCar, event.keyCode, true)
  event.preventDefault()
}

function keyUpHandler(event) {
  keySet(greenCar, event.keyCode, false)
  keySet(blueCar, event.keyCode, false)
}

function updateMousePosition(event) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  mouseX = event.clientX - rect.left - root.scrollLeft;
  mouseY = event.clientY - rect.top - root.scrollTop;
}
