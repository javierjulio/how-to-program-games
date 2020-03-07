var trackImages = [];

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
    { trackType: TRACK_ROAD, path: "images/track_road.png" },
    { trackType: TRACK_WALL, path: "images/track_wall.png" },
    { trackType: TRACK_FLAG, path: "images/track_flag.png" },
    { trackType: TRACK_GOAL, path: "images/track_goal.png" },
    { trackType: TRACK_TREE, path: "images/track_tree.png" },
  ]

  imagesToLoad = images.length;

  for (var i = 0; i < images.length; i++) {
    if (images[i].image) {
      loadImage(images[i].image, images[i].path)
    } else {
      trackImages[images[i].trackType] = document.createElement("img");
      loadImage(trackImages[images[i].trackType], images[i].path)
    }
  }
}
