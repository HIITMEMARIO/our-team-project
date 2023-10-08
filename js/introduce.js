const backBtn = document.querySelector(".btn-back");
const homeBtn = document.querySelector(".btn-home");

backBtn.addEventListener("click", () => {
  location.href = "card-page.html";
});

homeBtn.addEventListener("click", () => {
  location.href = "index.html";
});
