const darkModeBtn = document.querySelector('#dark_mode_checkbox');

let localStorageValue = localStorage.getItem('color-theme');

window.onload = function () {
  document.documentElement.setAttribute('color-theme', 'light');
  if (localStorageValue) {
    document.documentElement.setAttribute(
      'color-theme',
      `${localStorageValue}`
    );
  }
};

darkModeBtn.addEventListener('click', (e) => {
  if (e.target.checked) {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.setAttribute('color-theme', 'dark');
  } else {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light');
  }
});
