import firebase from 'firebase';

const firebaseApp = firebase.initiAlizeApp({
    apiKey: "AIzaSyD74USIzlkdclDTl3jHkWwoApOy4DP_hoU",
    authDomain: "my-basic-chat-app-cc633.firebaseapp.com",
    projectId: "my-basic-chat-app-cc633",
    storageBucket: "my-basic-chat-app-cc633.appspot.com",
    messagingSenderId: "374477573809",
    appId: "1:374477573809:web:07136888dcc6de125b1c90",
    measurementId: "G-8YXBNPEHWL"
});

const db = firebase.firestore()

const auth = firebase.auth()

export { db, auth }