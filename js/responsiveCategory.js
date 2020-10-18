const categoryBtn = document.querySelector('.catagory__btn i');
const gnbMenuResponsive = document.querySelector('.gnb__menu');

function categoryBtnHandle() {
  const GNBSHOW = document.querySelector('.categoryShow');

  if (GNBSHOW) {
    gnbMenuResponsive.classList.remove('categoryShow');
  } else {
    gnbMenuResponsive.classList.add('categoryShow');
  }
}

function init() {
  categoryBtn.addEventListener('click', categoryBtnHandle);
}
init();
