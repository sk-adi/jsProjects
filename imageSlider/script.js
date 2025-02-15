const container = document.getElementById("container");
const image = document.getElementById("image");
const right = document.getElementById("right");
const left = document.getElementById("left");

//array of images
const myarr = [
  "./images/flower.jpg",
  "./images/art.jpg",
  "./images/oranges.jpg",
  "./images/swan.jpg",
  "./images/another_flower.jpg",
];

let i = [0];
//function for right button
right.addEventListener("click", () => {
  image.src = myarr[i[0] + 1];
  i[0] = i[0] + 1;
  if (i[0] === myarr.length - 1) {
    i[0] = -1;
  }
});

//function for left button

left.addEventListener("click", () => {
  if (i[0] === 0) {
    i[0] = myarr.length - 1;
    image.src = myarr[i[0]];
  } else {
    image.src = myarr[i[0] - 1];
    i[0] = i[0] - 1;
  }
});
