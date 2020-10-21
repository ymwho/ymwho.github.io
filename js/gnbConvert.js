const gnbFixed = document.querySelector('#gnb');

function gnbFxiedHandle() {
  document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      gnbFixed.style.backgroundColor = '#1F1F1F';
      gnbFixed.style.transition = 'all 300ms ease-in-out';
    } else {
      gnbFixed.style.backgroundColor = 'transparent';
      gnbFixed.style.transition = 'all 300ms ease-in-out';
    }
  });
}

function init() {
  gnbFxiedHandle();
}
init();
