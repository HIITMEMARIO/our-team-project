const listbtn = document.getElementById("open");
const list = document.getElementById("list");
list.style.display = "none";

function handleListClick() {
  const listState = list.style.display;
  if (listState === "none") {
    list.style.display = "";
  } else {
    list.style.display = "none";
  }
}

listbtn.addEventListener("click", handleListClick);
// document.getElementById("list").style.display = "block";
