const darkModeBtn = document.querySelector("#dark-mode-checkbox");
const darkModeIcon = document.querySelector(".dark-mode-btn");

let localStorageValue = localStorage.getItem("color-theme");

window.onload = function () {
  document.documentElement.setAttribute("color-theme", "light");
  darkModeIcon.innerHTML = "🌜";
  if (localStorageValue) {
    document.documentElement.setAttribute(
      "color-theme",
      `${localStorageValue}`
    );
  }
};

darkModeBtn.addEventListener("click", (e) => {
  if (e.target.checked) {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    console.log(darkModeIcon);
    darkModeIcon.innerHTML = "🌞";
  } else {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
    darkModeIcon.innerHTML = "🌜";
  }
});
