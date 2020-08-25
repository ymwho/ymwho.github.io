'use strict';

const home = document.querySelector('#home');

const navHeight = 100;

function homeFixed(){
    document.addEventListener('scroll',()=>{
        if(window.scrollY > navHeight){
            home.classList.add('fixed');
        }
        else{
            home.classList.remove('fixed');
        }
    })
}



function init(){

    homeFixed();
}
init();