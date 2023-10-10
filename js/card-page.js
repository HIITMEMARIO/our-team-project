const member1Btn = document.getElementById("member1_btn");
const member2Btn = document.getElementById("member2_btn");
const member3Btn = document.getElementById("member3_btn");
const member4Btn = document.getElementById("member4_btn");
const member5Btn = document.getElementById("member5_btn");
const pageChangeEl = document.querySelector('.page-change')


const modalOpenButton = document.getElementById("modalOpenButton");
const modalCloseButton = document.getElementById("modalCloseButton");
const modal = document.getElementById("modalContainer");
const modalOpenButton2 = document.getElementById("modalOpenButton2");
const modalCloseButton2 = document.getElementById("modalCloseButton2");
const modal2 = document.getElementById("modalContainer2");
const modalOpenButton3 = document.getElementById("modalOpenButton3");
const modalCloseButton3 = document.getElementById("modalCloseButton3");
const modal3 = document.getElementById("modalContainer3");

member1Btn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = '../introduce.html';
    
    }, 400);
});

member2Btn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = '../introduce2.html';
    
    }, 400);
});

member3Btn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = '../introduce3.html';
    
    }, 400);
});

member4Btn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = '../introduce4.html';
    
    }, 400);
});

member5Btn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = '../introduce5.html';
    
    }, 400);
});


// // 카드 순차적으로 돌면서 나타나게하는 효과
const fadeMembersEls = document.querySelectorAll(".fade-in");
fadeMembersEls.forEach(function (fadeEl, index) {
  gsap.from(fadeEl, 1, {
    delay: (index + 1) * 0.5,
    opacity: 0,
    y: 320,
    duration: 2,
  })
});

// 팀 카드
const fadeTeamEls = document.querySelectorAll(".team");
fadeTeamEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 1,
    opacity: 1,
  });
});



// modal

modalOpenButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modalOpenButton2.addEventListener("click", () => {
  modal2.classList.remove("hidden");
});

modalCloseButton2.addEventListener("click", () => {
  modal2.classList.add("hidden");
});

modalOpenButton3.addEventListener("click", () => {
  modal3.classList.remove("hidden");
});

modalCloseButton3.addEventListener("click", () => {
  modal3.classList.add("hidden");
});
