const firstSlide = document.querySelector('.slider:first-child');

const VIEW = 'VIEW';
function slide() {
  const currentSlide = document.querySelector(`.${VIEW}`);
  if (currentSlide) {
    currentSlide.classList.remove(VIEW);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(VIEW);
    } else {
      firstSlide.classList.add(VIEW);
    }
  } else {
    firstSlide.classList.add(VIEW);
  }
}

function init() {
  setInterval(() => {
    slide();
  }, 5000);
}
init();
