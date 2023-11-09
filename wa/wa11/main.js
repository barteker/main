const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ["images/cafe.png", "images/donuts.png", "images/house.png", "images/travel.png", "images/trip.png"]

const altText = ["Eye", "Rock", "Flowers", "Egyptian Painting", "Moth"]

for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () => {
    displayedImage.src = newImage.src;
    displayedImage.alt = newImage.alt;
    });
}

btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else if (btn.getAttribute("class") === "light") {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";

    }
    
})

/* Wiring up the Darken/Lighten button */
