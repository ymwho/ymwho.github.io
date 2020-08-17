'use strict';

const navbarItems = document.querySelector('.menuIcon');
const navbarMenu = document.querySelector('.navbar__menu');



function showMenu() {

    const menuContain = navbarMenu.classList.contains('showing');

    if (menuContain) {
        navbarMenu.classList.remove('showing')
    } else {
        navbarMenu.classList.add('showing');
    }



}




function init() {

    navbarItems.addEventListener('click', showMenu);


}

init()