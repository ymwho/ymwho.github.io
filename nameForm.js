const nameForm = document.querySelector('.nameForm'),
  nameInput = document.querySelector('input');
const painting = document.querySelector('.painting');


const cUser = 'currentUser';

function saveValue(text) {
  localStorage.setItem(cUser, text);
}

function submitHandler(event) {
  event.preventDefault();
  const currentInput = nameInput.value;
  saveValue(currentInput);
  showValue(currentInput);
}

function nameSubmit() {
  nameForm.classList.add('showing');
  nameForm.addEventListener('submit', submitHandler);
}

function showValue(text) {
  nameForm.classList.remove('showing');
  painting.classList.add('showing');
  painting.innerText = `${text}`;
}

function writeName() {
  const currentUser = localStorage.getItem(cUser);
  if (currentUser == null) {
    nameSubmit();
  } else {
    showValue(currentUser);
  }
}

function init() {
  writeName();
}

init();