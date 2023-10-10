const listbtn = document.getElementById('open');
const list = document.querySelector('.list1');

listbtn.addEventListener('click', function (event) {
  event.stopPropagation();
  if (list.classList.contains('show')) {
    list.classList.remove('show');
  } else {
    list.classList.add('show');
  }
});

window.addEventListener('click', function () {
  list.classList.remove('show');
});
