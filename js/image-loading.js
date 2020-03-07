var carImage = document.createElement("img");
var roadImage = document.createElement("img");
var wallImage = document.createElement("img");
var flagImage = document.createElement("img");
var goalImage = document.createElement("img");
var treeImage = document.createElement("img");

var imagesToLoad = 0;

function onImageLoaded() {
  imagesToLoad--;
  if (imagesToLoad === 0) {
    startGame();
  }
}

function loadImage(image, path) {
  image.onload = onImageLoaded;
  image.src = path;
}

function loadImages() {
  const images = [
    { image: carImage, path: "images/player1car.png" },
    { image: roadImage, path: "images/track_road.png" },
    { image: wallImage, path: "images/track_wall.png" },
    { image: flagImage, path: "images/track_flag.png" },
    { image: goalImage, path: "images/track_goal.png" },
    { image: treeImage, path: "images/track_tree.png" },
  ]

  imagesToLoad = images.length;

  for (var i = 0; i < images.length; i++) {
    loadImage(images[i].image, images[i].path)
  }
}
