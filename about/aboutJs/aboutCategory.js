const category = document.querySelector('c');
const categoryList = document.querySelector('.category__click'),
  cancelBtn = categoryList.querySelector('.cancle'),
  whiteSpace = categoryList.querySelector('.white__space');

function cancleHandle() {
  categoryList.classList.remove('show');
}

function showList() {
  categoryList.classList.add('show');
  cancelBtn.addEventListener('click', cancleHandle);
}
function init() {
  category.addEventListener('click', showList);
}

init();
