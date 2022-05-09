const menu = document.getElementById('menu');
const close = document.getElementById('close');
const navbar = document.querySelector('nav').classList;
menu.addEventListener('click', () => {
  navbar.add('nav-bar-open');
})
close.addEventListener('click', () => {
  navbar.remove('nav-bar-open');
})
