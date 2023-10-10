// index.html 이미지,텍스트 순차적으로 보이게 하는 애니메이션 효과

const fadeEls = document.querySelectorAll(".gsap");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.3,
    opacity: 1,
  });
});

gsap.from(".text-icon", {
  opacity: 0,
  y: 200,
  duration: 2,
});

const buttonHoverEl = document.querySelector(".circle");
const containerEl = document.querySelector(".container");

buttonHoverEl.addEventListener("click", function () {
  containerEl.classList.add("background");

  setTimeout(function () {
    location.href = "templates/card-page.html";
  }, 400);
});
