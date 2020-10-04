const itemsImage = document.querySelector('.items__image');

function init() {
  let options = { threshold: 0.4 };

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        itemsImage.classList.add('itemsShow');
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(itemsImage);
}
init();
