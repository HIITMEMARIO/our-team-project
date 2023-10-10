const member1Btn = document.getElementById("member1_btn")
const member2Btn = document.getElementById("member2_btn")
const member3Btn = document.getElementById("member3_btn")
const member4Btn = document.getElementById("member4_btn")
const member5Btn = document.getElementById("member5_btn")

member1Btn.addEventListener("click", () => {
  location.href = "introduce.html";
});

member2Btn.addEventListener("click", () => {
  location.href = "introduce2.html";
});

member3Btn.addEventListener("click", () => {
  location.href = "introduce3.html";
});

member4Btn.addEventListener("click", () => {
  location.href = "introduce4.html";
});

member5Btn.addEventListener("click", () => {
  location.href = "introduce5.html";
});

// // 카드 순차적으로 돌면서 나타나게하는 효과
const fadeMembersEls = document.querySelectorAll(".fade-in");
fadeMembersEls.forEach(function (fadeEl, index) {
  gsap.from(fadeEl, 1, {
    delay: (index + 1) * 0.5,
    opacity: 0,
    y: 320,
    duration: 2,
  });
});

// 팀 카드
const fadeTeamEls = document.querySelectorAll(".team");
fadeTeamEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 1,
    opacity: 1,
  });
});



