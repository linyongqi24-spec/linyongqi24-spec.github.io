// ===============================
// Firebase 設定（勇気さんが貼る部分）
// ===============================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ===============================
// Firebase 初期化
// ===============================
firebase.initializeApp(firebaseConfig);

// Firestore を使えるようにする
const db = firebase.firestore();

const firebaseConfig = {
  apiKey: "AIzaSyCjPbi2cWtOni43MyUI6Zxfq8erA5_riCA",
  authDomain: "bakusai-safe-board.firebaseapp.com",
  projectId: "bakusai-safe-board",
  storageBucket: "bakusai-safe-board.firebasestorage.app",
  messagingSenderId: "871130788982",
  appId: "1:871130788982:web:8f3dd93dc1d37ccb6e1b57"
};
