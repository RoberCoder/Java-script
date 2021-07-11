const images= [
    "1.jpg","3.jpg","4.jpg","5.jpg"
]

const body = document.querySelector("body")


const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img");

bgImage.src= `img/${chosenImage}`;



body.style.background = `url(img/${chosenImage}`;

body.style.backgroundSize="cover";
 