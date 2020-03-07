const GROUNDSPEED_DECAY_MULTIPLIER = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;

class Car {
  constructor(x=75, y=75, angle=0, speed=0) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = speed;

    this.keyHeld_Gas = false;
    this.keyHeld_Reverse = false;
    this.keyHeld_TurnLeft = false;
    this.keyHeld_TurnRight = false;

    this.controlKeyUp = 0;
    this.controlKeyDown = 0;
    this.controlKeyLeft = 0;
    this.controlKeyRight = 0;
  }

  reset(image) {
    this.image = image;
    for (var row = 0; row < TRACK_ROWS; row++) {
      for (var col = 0; col < TRACK_COLS; col++) {
        var arrayIndex = rowColToArrayIndex(col, row);
        if (trackGrid[arrayIndex] === TRACK_PLAYER_START) {
          trackGrid[arrayIndex] = TRACK_ROAD;
          this.angle = -Math.PI/2
          this.x = col * TRACK_WIDTH + TRACK_WIDTH / 2;
          this.y = row * TRACK_HEIGHT + TRACK_HEIGHT / 2;
          return;
        }
      }
    }
  }

  move() {
    this.speed *= GROUNDSPEED_DECAY_MULTIPLIER;

    if (this.keyHeld_Gas) {
      this.speed += DRIVE_POWER;
    }
    if (this.keyHeld_Reverse) {
      this.speed -= REVERSE_POWER;
    }

    if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
      if (this.keyHeld_TurnLeft) {
        this.angle -= TURN_RATE;
      }
      if (this.keyHeld_TurnRight) {
        this.angle += TURN_RATE;
      }
    }

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    carTrackHandling(this);
  }

  draw() {
    drawBitmapCenteredWithRotation(this.image, this.x, this.y, this.angle);
  }
}
