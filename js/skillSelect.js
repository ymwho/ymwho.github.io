const skillSelect = document.querySelector('.skill__select');

const SELECTSHOW = 'selectShow';

function skillSelectHanlde(e) {
  const skillTarget = e.target;
  const skillLink = skillTarget.dataset.select;

  const skillConvert = document.querySelector(skillLink);
  if (skillConvert === null) {
    return;
  }
  const currentSelect = document.querySelector(`.${SELECTSHOW}`);
  if (currentSelect) {
    currentSelect.classList.remove(SELECTSHOW);
    skillConvert.classList.add(SELECTSHOW);
  } else {
    skillConvert.classList.add(SELECTSHOW);
  }
}

function init() {
  skillSelect.addEventListener('click', skillSelectHanlde);
}
init();
