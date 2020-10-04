const downBtn = document.querySelector('.down__btn');

function downHandler(e) {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const about = document.querySelector(link);
  about.scrollIntoView({ behavior: 'smooth' });
}

function init() {
  downBtn.addEventListener('click', downHandler);
}
init();
