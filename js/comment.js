const username = document.querySelector(".comments__username");
const comment = document.querySelector(".comments__textarea");
const submitBtn = document.getElementById("comments__submit_btn");

function handleclick() {
  alert("hi");
}

submitBtn.addEventListener("click", handleclick);

// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  getDocs,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFMv6kAjohiJW_DBDxaEDyj0pZ2nvA_e4",
  authDomain: "sajochamchi-9d4df.firebaseapp.com",
  projectId: "sajochamchi-9d4df",
  storageBucket: "sajochamchi-9d4df.appspot.com",
  messagingSenderId: "216151407535",
  appId: "1:216151407535:web:2152ad1ea2af792c6a4d5a",
  measurementId: "G-KC16MXH9ZV",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const ref = collection(db, "nbcamp1stProject");

$("comments__submit_btn").click(async function () {});
