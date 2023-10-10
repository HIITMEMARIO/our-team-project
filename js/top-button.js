const topBtn = document.querySelector(".top_btn");

function scrollToTop() {
  console.log("im clicked");
  scrollTo({ top: 0, behavior: "smooth" });
}

topBtn.addEventListener("click", scrollToTop);
