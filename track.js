const TRACK_WIDTH = 40;
const TRACK_HEIGHT = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

var trackGrid = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
                 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
                 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 ];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYER_START = 2;

function isWallAtColRow(col, row) {
  if (col >= 0 && col < TRACK_COLS &&
      row >= 0 && row < TRACK_ROWS) {
    return (trackGrid[rowColToArrayIndex(col, row)] === TRACK_WALL);
  } else {
    return false
  }
}

function carTrackHandling() {
  var carTrackCol = Math.floor(carX / TRACK_WIDTH);
  var carTrackRow = Math.floor(carY / TRACK_HEIGHT);
  // var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

  if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
      carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {

    if (isWallAtColRow(carTrackCol, carTrackRow)) {
      carX -= Math.cos(carAngle) * carSpeed;
      carY -= Math.sin(carAngle) * carSpeed;

      carSpeed *= -0.5
    }
  }
}

function rowColToArrayIndex(col, row) {
  return col + TRACK_COLS * row;
}

function drawTracks() {
  for (var row = 0; row < TRACK_ROWS; row++) {
    for (var col = 0; col < TRACK_COLS; col++) {
      var arrayIndex = rowColToArrayIndex(col, row);
      if (trackGrid[arrayIndex] === TRACK_WALL) {
        canvasContext.drawImage(wallImage, TRACK_WIDTH*col, TRACK_HEIGHT * row)
      } else if (trackGrid[arrayIndex] === TRACK_ROAD) {
        canvasContext.drawImage(roadImage, TRACK_WIDTH*col, TRACK_HEIGHT * row)
      }
    }
  }
}
