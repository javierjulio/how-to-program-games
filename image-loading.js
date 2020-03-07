var carImage = document.createElement("img");
var roadImage = document.createElement("img");
var wallImage = document.createElement("img");

var imagesToLoad = 0;

function onImageLoaded() {
  imagesToLoad--;
  if (imagesToLoad === 0) {
    startGame();
  }
}

function loadImage(image, fileName) {
  image.onload = onImageLoaded;
  image.src = fileName;
}

function loadImages() {
  const images = [
    { image: carImage, fileName: "player1car.png" },
    { image: roadImage, fileName: "track_road.png" },
    { image: wallImage, fileName: "track_wall.png" }
  ]

  imagesToLoad = images.length;

  for (var i = 0; i < images.length; i++) {
    loadImage(images[i].image, images[i].fileName)
  }
}
