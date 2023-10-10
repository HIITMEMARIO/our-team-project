const member1Btn = document.getElementById("member1_btn")
const member2Btn = document.getElementById("member2_btn")
const member3Btn = document.getElementById("member3_btn")
const member4Btn = document.getElementById("member4_btn")
const member5Btn = document.getElementById("member5_btn")
const pageChangeEl = document.querySelector('.page-change')

member1Btn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = 'introduce.html';
    
    }, 400);
});

member2Btn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = 'introduce2.html';
    
    }, 400);
});

member3Btn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = 'introduce3.html';
    
    }, 400);
});

member4Btn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = 'introduce4.html';
    
    }, 400);
});

member5Btn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = 'introduce5.html';
    
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



