const img = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImg = img[Math.floor(Math.random() * img.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);