// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  Timestamp,
  doc,
  orderBy,
  query,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA_W0Kd8-Quj8vGsbgQ5zcl7IIfm4YGjA",
  authDomain: "sparta-816b8.firebaseapp.com",
  projectId: "sparta-816b8",
  storageBucket: "sparta-816b8.appspot.com",
  messagingSenderId: "838877346235",
  appId: "1:838877346235:web:86b6f2a1013b0a66612c9e",
  measurementId: "G-P881GFJ7Z6",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/*
const submitBtn = document.getElementById("submit_btn");
const username = document.getElementById("username");
const comment = document.getElementById("textarea");

submitBtn.addEventListener("click", async function (e) {
  console.log(e);
});
*/

$("submit_btn").click(async function () {
  const username = $("#username").val();
  const textarea = $("#textarea").val();

  let doc = { username: username, textarea: textarea };
  await addDoc(collection(db, "comments"), doc);
  alert("저장 완료!");
  window.location.reload();
});
