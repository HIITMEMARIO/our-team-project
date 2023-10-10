const backBtn = document.querySelector(".btn-back");
const homeBtn = document.querySelector(".btn-home");
const pageChangeEl = document.querySelector(".page-change")
backBtn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = 'card-page.html';
    
    }, 400);
});

homeBtn.addEventListener("click", () => {
  pageChangeEl.classList.add('background')
  setTimeout(function(){

    location.href = 'index.html';
    
    }, 400);
});
