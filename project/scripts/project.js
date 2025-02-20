const darkModeToggle = document.getElementById('dark-mode-toggle'); // Get your toggle element (e.g., a button)
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Store user preference in local storage (optional, but good practice)
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});

// Check local storage on page load
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
}