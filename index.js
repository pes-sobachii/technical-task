const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.menu');
const main = document.querySelector('main');

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('visible');
  main.classList.toggle('hidden');
});