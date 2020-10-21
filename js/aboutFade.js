const AboutImg = document.querySelector('.about__img');

let options = { threshold: 0.3 };

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      AboutImg.classList.add('aboutShow');
      observer.unopserve(entry.target);
    } else {
      AboutImg.classList.remove('aboutShow');
    }
  });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(AboutImg);
