const gnbFixed = document.querySelector('#gnb');

function gnbFxiedHandle() {
  document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      gnbFixed.style.backgroundColor = '#1F1F1F';
    } else {
      gnbFixed.style.backgroundColor = 'transparent';
    }
  });
}

function init() {
  gnbFxiedHandle();
}
init();
