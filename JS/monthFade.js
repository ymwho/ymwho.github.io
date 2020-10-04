const monthOne = document.querySelector('.month__one');
const monthTwo = document.querySelector('.month__two');
const monthThree = document.querySelector('.month__three');

function init() {
  let options = { threshold: 0.2 };

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        monthOne.classList.add('monthShow');
        setTimeout(() => {
          monthTwo.classList.add('monthShow');
        }, 200);
        setTimeout(() => {
          monthThree.classList.add('monthShow');
        }, 300);
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(monthOne);
  observer.observe(monthTwo);
  observer.observe(monthThree);
}
init();
