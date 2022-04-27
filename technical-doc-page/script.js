const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const nav = document.querySelector('.nav-menu').classList;
menu.addEventListener('click', () => {
   nav.add('nav-bar-open');
})
close.addEventListener('click', () => {
   nav.remove('nav-bar-open');
})
