"use strict";

const firstSlide = document.querySelector('.slide__items:first-child');
const SHOWING = 'showing';

function showingImg() {
    const currentImage = document.querySelector(`.${SHOWING}`);
    if (currentImage) {
        currentImage.classList.remove(SHOWING);
        const nextImage = currentImage.nextElementSibling;
        if (nextImage) {
            nextImage.classList.add(SHOWING)
        } else {
            firstSlide.classList.add(SHOWING);
        }

    } else {
        firstSlide.classList.add(SHOWING);
    }

}


function init() {
    setInterval(showingImg,4000);
}
init();