const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.menu');
const main = document.querySelector('main');

const typed = new Typed('#element', {
  strings: ['serverless'],
  typeSpeed: 150,
  backSpeed: 150,
  showCursor: false,
  loop: true,
});

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('visible');
  main.classList.toggle('hidden');
});