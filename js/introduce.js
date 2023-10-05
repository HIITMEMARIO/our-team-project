const darkMode = document.querySelector('#dark_mode');

darkMode.addEventListener('click', (e) => {
  document.documentElement.setAttribute('color-theme', 'dark');
});
