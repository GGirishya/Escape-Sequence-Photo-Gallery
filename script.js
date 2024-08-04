const imageSources = [
  "assets/trail.jpg",
  "assets/lakesunset.jpg",
  "assets/cabin.jpg",
  "assets/doe.jpg",
  "assets/starrynight.jpg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  const thumbnail = document.createElement("img");
  // 1.2 Customize the element
  thumbnail.src = imageSource;
  thumbnail.classList.add("thumbnail");
  // 1.3 Append the element
  const thumbnailContainer = document.getElementById("thumbnail-container");
  thumbnailContainer.appendChild(thumbnail);
  // 1.4 Add the onclick
  thumbnail.onclick = function() {
    const fullsizeImage = document.getElementById("fullsize-image");
    fullsizeImage.src = imageSource;

    // make the image container is visible
    document.getElementById('image-container').classList.remove('hidden');

  } 
}

function addAllThumbnails() {
  // 2.1 Loop through 
for (let i =0; i<imageSources.length; i++){ 
  // 2.2 Call addThumbnail each iteration 
  addThumbnail(imageSources[i]);
  }
}
// 2.3 Call addAllThumbnails
// since i am doing the level up i optimised the code by 

// LevelUp Display the first image on page load
document.addEventListener("DOMContentLoaded", function() {
  addAllThumbnails();

  if (imageSources.length > 0){
    const fullsizeImage = document.getElementById("fullsize-image");
    const imageContainer = document.getElementById("image-container");

    fullsizeImage.src = imageSources[0];
    imageContainer.classList.remove('hidden')
  }
});
