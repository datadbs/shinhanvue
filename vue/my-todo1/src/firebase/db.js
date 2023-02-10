import firebase from 'firebase/app'; // 파이어베이스 기능 불러오기
import 'firebase/firestore'; // 파이어베이스의 파이어스토어 기능 불러오기

const firebaseConfig = {
    apiKey: "AIzaSyBS0ln_E3cYnFcBj6haCV0ew2-AS98PgPM",
    authDomain: "my-todo1-81975.firebaseapp.com",
    projectId: "my-todo1-81975",
    storageBucket: "my-todo1-81975.appspot.com",
    messagingSenderId: "1052370025641",
    appId: "1:1052370025641:web:34e7a97b19a0a844c3fdb8"
  };

export const db = firebase.initializeApp(firebaseConfig).firestore();