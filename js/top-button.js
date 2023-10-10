const topBtn = document.querySelector(".top_btn");

function scrollToTop() {
  scrollTo({ top: 0, behavior: "smooth" });
}

topBtn.addEventListener("click", scrollToTop);
