'use strict';
const contact = document.querySelector('#contact');
const homeItem = document.querySelector('.home__items');
const homeTitle = document.querySelector('.home__title');
const logo = document.querySelector('.navbar__logo');
const menu = document.querySelector('.home__menu');
const majorDescription = document.querySelector('.major__description');
// Contact 클릭시 스크롤링 이벤트

homeTitle.addEventListener('click', () => {
  scrollTo(contact);
});

//Side menu 클릭시 이동 이벤트
menu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    const scroll = document.querySelector(link);
    scroll.scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// 스크롤링 이벤트 function
function scrollTo(value) {
  value.scrollIntoView({
    behavior: 'smooth',
  });
}

// 메뉴 클릭시 사이드 메뉴바 등장 function들

function make() {
  menu.style.width = '230px';
}

function unmake() {
  menu.style.width = '0px';
}
