const member1Btn = document.getElementById("member1_btn");
const member2Btn = document.getElementById("member2_btn");
const member3Btn = document.getElementById("member3_btn");
const member4Btn = document.getElementById("member4_btn");
const member5Btn = document.getElementById("member5_btn");

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
