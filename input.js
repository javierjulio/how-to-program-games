const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_RIGHT_ARROW = 39;

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnLeft = false;
var keyHeld_TurnRight = false;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
  canvas.addEventListener('mousemove', updateMousePosition);

  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);
}

function keyDownHandler(event) {
  if (event.keyCode == KEY_LEFT_ARROW) {
    keyHeld_TurnLeft = true
  }
  if (event.keyCode == KEY_RIGHT_ARROW) {
    keyHeld_TurnRight = true
  }
  if (event.keyCode == KEY_UP_ARROW) {
    keyHeld_Gas = true
  }
  if (event.keyCode == KEY_DOWN_ARROW) {
    keyHeld_Reverse = true
  }
  event.preventDefault()
}

function keyUpHandler(event) {
  if (event.keyCode == KEY_LEFT_ARROW) {
    keyHeld_TurnLeft = false
  }
  if (event.keyCode == KEY_RIGHT_ARROW) {
    keyHeld_TurnRight = false
  }
  if (event.keyCode == KEY_UP_ARROW) {
    keyHeld_Gas = false
  }
  if (event.keyCode == KEY_DOWN_ARROW) {
    keyHeld_Reverse = false
  }
}

function updateMousePosition(event) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  mouseX = event.clientX - rect.left - root.scrollLeft;
  mouseY = event.clientY - rect.top - root.scrollTop;
  // carX = mouseX;
  // carY = mouseY;
}
