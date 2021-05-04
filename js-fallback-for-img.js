const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>What if an image fails to load?</h1>`;


const container = document.createElement('div');
container.className = "container";
appDiv.appendChild(container);


const placeholder = document.createElement('div');
placeholder.className = "placeholder";
placeholder.innerText = "Image not found";


const goodURL = "https://placekitten.com/g/300/200";
const badURL = "https://www.placekitten.com/g/300/200";

const image = document.createElement('img');
// image.src = goodURL;
// toggle this code to see how the placeholder works in the UI
image.src = badURL;

image.onload = () => {
  container.appendChild(image)
}

image.onerror = () => {
  container.appendChild(placeholder)
}

// https://stackblitz.com/edit/js-fallback-for-image-d7fsmp?file=index.js