const body = document.querySelector('body');

const IMG_NUMBER = 4;

function imgHandle() {
    console.log('finish loading')
}

function paintImage(imgnumber) {
    const image = new Image();
    image.src = `/imgs/${imgnumber +1 }.jpg`;
    image.classList.add('image');
    body.prepend(image);


}



function randNumber() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init() {
    const rand = randNumber();
    paintImage(rand);

}
init();