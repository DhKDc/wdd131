const darkModeToggle = document.getElementById('theme-switcher');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});

if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
}