const gnbMenu = document.querySelector('.gnb__menu');

function gnbMenuHandle(e) {
  const gnbTarget = e.target;
  const gnbLink = gnbTarget.dataset.link;
  const gnbDataset = document.querySelector(gnbLink);
  if (gnbDataset === null) {
    return;
  } else {
    gnbDataset.scrollIntoView({ behavior: 'smooth' });
  }
}

function init() {
  gnbMenu.addEventListener('click', gnbMenuHandle);
}
init();
