const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuIcon.style.opacity = menu.classList.contains('show') ? '0' : '1';
    closeIcon.style.opacity = menu.classList.contains('show') ? '1' : '0';
});