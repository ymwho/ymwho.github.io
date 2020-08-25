'use strict';



const infoRight = document.querySelector(".info__right");
const descriptionLeft = document.querySelector('.description__left')

const infoHeight = 400;
const descriptionHeight = 1000;

function infoUp(){

    document.addEventListener('scroll',()=>{
        if(window.scrollY > infoHeight){
            infoRight.classList.add('infoView');
        }
        else{
            infoRight.classList.remove('infoView');
        }
    })
}

function descriptionUp(){

    document.addEventListener('scroll',()=>{
        if(window.scrollY > descriptionHeight){
            descriptionLeft.classList.add('infoView');
        }
        else{
            descriptionLeft.classList.remove('infoView');
        }
    })
}




function init(){
    descriptionUp()
    infoUp()

}
init();