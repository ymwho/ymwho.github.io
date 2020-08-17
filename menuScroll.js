"use strict";

const navMenu = document.querySelector('.navbar__menu');

function selectView(event) {

    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return
    }

    scrollIn(link)


}


function scrollIn(value) {

    const scroll = document.querySelector(value);
    scroll.scrollIntoView({
        behavior: "smooth"
    });

}

function init() {

    navMenu.addEventListener('click', selectView)

}

init()