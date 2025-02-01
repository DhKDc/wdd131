const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        menuIcon.style.opacity = '0';
        closeIcon.style.opacity = '1';
    } else {
        menuIcon.style.opacity = '1';
        closeIcon.style.opacity = '0';
    }
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
        menuIcon.style.opacity = '1';
        closeIcon.style.opacity = '0';
    }
});