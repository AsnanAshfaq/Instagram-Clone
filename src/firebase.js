import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3ZlSKAeWS_T4Lia7Nwnb1h-wkZQJ7qoU",
  authDomain: "instagram-clone-28e6e.firebaseapp.com",
  databaseURL: "https://instagram-clone-28e6e.firebaseio.com",
  projectId: "instagram-clone-28e6e",
  storageBucket: "instagram-clone-28e6e.appspot.com",
  messagingSenderId: "249177432801",
  appId: "1:249177432801:web:c35997dc425b719a130da0",
};

// initializa app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

// Create a root reference
const storage = firebase.storage();

export {db , auth , storage}
