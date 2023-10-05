// index.html 이미지,텍스트 순차적으로 보이게 하는 애니메이션 효과

const fadeEls = document.querySelectorAll(".gsap");

fadeEls.forEach(function (fadeEl, index){
  gsap.to(fadeEl, 1, {  
    delay:(index + 1) * .7, 
    opacity: 1
  })
});


