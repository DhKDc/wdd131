const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        hamburger.classList.remove('active');
    } else {
        menu.classList.add('show');
        hamburger.classList.add('active');
    }
});