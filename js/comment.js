// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
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
const submitBtn = document.querySelector("#submit_btn");
const commentsBox = document.querySelector(".comments");

async function comment() {
  const username = $("#username").val();
  const textarea = $("#textarea").val();

  let doc = { username: username, textarea: textarea };
  const commentref = collection(db, "comments");
  await addDoc(commentref, doc);
  alert("저장 완료!");

  window.location.reload();
}

let docs = await getDocs(collection(db, "comments"));
addComment(docs);

function addComment(docs) {
  docs.forEach((doc) => {
    let data = doc.data();
    console.log(data);
    let comment = data.textarea;
    let userName = data.username;
    // * 새로운 container element 추가하기
    const div = document.createElement("div");

    // * container element에 class name 추가하기

    div.innerHTML = `<div class="comment">
    <h2 class="comment__username">${userName}</h2>
    <div class="comment__contents">
      <span class="comment__text">${comment}</span>
      <span id="comment__delete">❌</span>
    </div>
  </div>`;

    commentsBox.append(div);
  });
}

submitBtn.addEventListener("click", comment);

// let docs = await getDocs(collection(db, "comments"));
// docs.forEach((doc) => {
//   let row = doc.data();
//   const username = row["username"];
//   const textarea = row["textarea"];
// });

// $("#submit_btn").click(async function () {
//   console.log("hello");
//   const username = $("#username").val();
//   const textarea = $("#textarea").val();

//   let doc = { username: username, textarea: textarea };
//   await addDoc(collection(db, "comments"), doc);
//   alert("저장 완료!");
//   window.location.reload();
// });
