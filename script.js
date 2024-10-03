document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.querySelector(".gallery-container");
  const images = document.querySelectorAll(".gallery-item img");

  const imageUrls = [
    "https://via.placeholder.com/150/0000FF",
    "https://via.placeholder.com/150/FF0000",
    "https://via.placeholder.com/150/00FF00",
    "https://via.placeholder.com/150/FFFF00",
  ];

  const btn2Columns = document.getElementById("grid-2-columns");
  const btn3Columns = document.getElementById("grid-3-columns");

  const btnCircular = document.getElementById("circular-images");
  const btnSquare = document.getElementById("square-images");
  const btnPortrait = document.getElementById("portrait-images");

  btn2Columns.addEventListener("click", function () {
    galleryContainer.classList.remove("gallery-3-columns");
    galleryContainer.classList.add("gallery-2-columns");
  });

  btn3Columns.addEventListener("click", function () {
    galleryContainer.classList.remove("gallery-2-columns");
    galleryContainer.classList.add("gallery-3-columns");
  });

  btnCircular.addEventListener("click", function () {
    galleryContainer.classList.remove("square", "portrait");
    galleryContainer.classList.add("circular");
  });

  btnSquare.addEventListener("click", function () {
    galleryContainer.classList.remove("circular", "portrait");
    galleryContainer.classList.add("square");
  });

  btnPortrait.addEventListener("click", function () {
    galleryContainer.classList.remove("circular", "square");
    galleryContainer.classList.add("portrait");
  });

  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      image.src = imageUrls[index % imageUrls.length];
    });
  });
});
