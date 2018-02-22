import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBBP0iSoVMKf81RAY1k-QdEWdmOgzPOd4I",
  authDomain: "chat-app-fa5e4.firebaseapp.com",
  databaseURL: "https://chat-app-fa5e4.firebaseio.com",
  projectId: "chat-app-fa5e4",
  storageBucket: "chat-app-fa5e4.appspot.com",
  messagingSenderId: "214761319365"
};

const db = firebase.initializeApp(config);
