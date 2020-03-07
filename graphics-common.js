function drawBitmapCenteredWithRotation(bitmap, x, y, angle) {
  canvasContext.save()
  canvasContext.translate(x, y)
  canvasContext.rotate(angle)
  canvasContext.drawImage(bitmap, -bitmap.width / 2, -bitmap.height / 2)
  canvasContext.restore()
}

function colorRect(topLeftX, topLeftY, width, height, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, width, height);
}

function colorCircle(x, y, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(x, y, radius, 0, Math.PI*2, true);
  canvasContext.fill();
}

function colorText(text, x, y, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillText(text, x, y);
}
