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
const ref = collection(db, "comments");

const submitBtn = document.querySelector("#submit_btn");
const commentsBox = document.querySelector(".comments");
const deleteBtn = document.querySelectorAll(".comment__delete");

async function submitComment() {
  const username = $("#username").val();
  const textarea = $("#textarea").val();
  const getDate = Timestamp.fromDate(new Date());

  let doc = {
    username: username,
    textarea: textarea,
    date: getDate.toDate(),
  };

  await addDoc(ref, doc);
  alert("저장 완료!");
  window.location.reload();
}

const docs = await getDocs(query(ref, orderBy("date", "desc")));
addComment(docs);

function addComment(docs) {
  docs.forEach((doc) => {
    let data = doc.data();
    let comment = data.textarea;
    let userName = data.username;
    let createdDate = data.date;
    let date = createdDate.seconds * 1000;
    let newDate = new Date(date);

    // * 새로운 container element 추가하기
    const div = document.createElement("div");
    div.classList.add("comment-group");

    // * container element에 class name 추가하기

    div.innerHTML = `<div class="comment">
    <h2 class="comment__username">${userName}</h2>
    <div class="comment__contents">
      <span class="comment__text">${comment}</span>
      <button value=${doc.id} class="comment__delete">❌</button>
    </div>
    <p class="comment__timestamp">${newDate.getFullYear()}년 ${
      newDate.getMonth() + 1
    }월 ${newDate.getDate()}일 ${newDate.getHours()}시 ${newDate.getMinutes()}분 ${newDate.getSeconds()}초</p>
  </div>`;

    commentsBox.append(div);
  });
  deleteComment();
}

let currentCommentId = "";
async function deleteComment() {
  document.querySelectorAll(".comment__delete").forEach((button) => {
    button.addEventListener("click", function (e) {
      currentCommentId = e.target.value;
      const getData = doc(db, "comments", currentCommentId);
      deleteDoc(getData)
        .then(() => {
          alert("삭제 완료!");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
}

submitBtn.addEventListener("click", submitComment);

deleteBtn.forEach((icon) => {
  icon.addEventListener("click", deleteComment);
});
