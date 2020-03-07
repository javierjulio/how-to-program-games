var carX = 75;
var carY = 75;
var carAngle = 0;
var carSpeed = 0;

const GROUNDSPEED_DECAY_MULTIPLIER = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.07;

function carReset() {
  for (var row = 0; row < TRACK_ROWS; row++) {
    for (var col = 0; col < TRACK_COLS; col++) {
      var arrayIndex = rowColToArrayIndex(col, row);
      if (trackGrid[arrayIndex] === TRACK_PLAYER_START) {
        trackGrid[arrayIndex] = TRACK_ROAD;
        carAngle = -Math.PI/2
        carX = col * TRACK_WIDTH + TRACK_WIDTH / 2;
        carY = row * TRACK_HEIGHT + TRACK_HEIGHT / 2;
      }
    }
  }
}

function carMove() {
  carSpeed *= GROUNDSPEED_DECAY_MULTIPLIER;

  if (keyHeld_Gas) {
    carSpeed += DRIVE_POWER;
  }
  if (keyHeld_Reverse) {
    carSpeed -= REVERSE_POWER;
  }
  if (keyHeld_TurnLeft) {
    carAngle -= TURN_RATE;
  }
  if (keyHeld_TurnRight) {
    carAngle += TURN_RATE;
  }

  carX += Math.cos(carAngle) * carSpeed;
  carY += Math.sin(carAngle) * carSpeed;
}

function drawCar() {
  drawBitmapCenteredWithRotation(carImage, carX, carY, carAngle);
}
