"use strict";

$(document).ready(function () {
    $(this).scrollTop(0);
});

const profileBox = document.querySelector('.profile__box');
const profile = document.querySelector('#profile');



function showBoxHandler(value) {
    const windowHeight = window.scrollY;
    if (windowHeight > value / 3) {
        profileBox.classList.add('visible');
    } else {
        profileBox.classList.remove('visible');
    }

}


function showBox() {
    const profileHeight = profile.getBoundingClientRect().height;
    showBoxHandler(profileHeight)
}


function init() {
    window.addEventListener('scroll', showBox)

}

init();