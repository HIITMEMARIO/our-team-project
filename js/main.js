// index.html 이미지,텍스트 순차적으로 보이게 하는 애니메이션 효과

const fadeEls = document.querySelectorAll(".gsap");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .3,
    opacity: 1
  })
});



gsap.from(".text-icon", {
  opacity: 0,
  y: 200,
  duration: 2
});


// // 카드 순차적으로 돌면서 나타나게하는 효과
const fadeMembersEls = document.querySelectorAll(".fade-in");
fadeMembersEls.forEach(function (fadeEl, index) {
  gsap.from(fadeEl, 1, {
    delay: (index + 1) * .5,
    opacity: 0,
    y: 320,
    duration: 2
  })
});

// 팀 카드 
const fadeTeamEls = document.querySelectorAll(".team");
fadeTeamEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 1,
    opacity: 1,
  })
});




const buttonHoverEl = document.querySelector('.circle')
const containerEl = document.querySelector('.container')
const IconEl = document.querySelector('.material-symbols-outlined')
const textEl = document.querySelector('.font-position')


buttonHoverEl.addEventListener('click', function () {
  containerEl.classList.add('background')

  setTimeout(function(){

    location.href = 'card-page.html';
    
    }, 400);
})
