import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyBdIO8_wtakKu91Wg5VHc7myZlhiAebp0k",
    authDomain: "chat-web-app-1bd4e.firebaseapp.com",
    databaseURL: "https://chat-web-app-1bd4e-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-1bd4e",
    storageBucket: "chat-web-app-1bd4e.appspot.com",
    messagingSenderId: "320703286940",
    appId: "1:320703286940:web:f1c7684f0d8eb6e26de759"
  };

  const app = firebase.initializeApp(config)