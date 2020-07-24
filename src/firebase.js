import firebase from "firebase";

const firebaseInit = firebase.initializeApp({
  apiKey: "AIzaSyDI7og2EaQuFYvVNUw9CIE0Wcny2UA1_ps",
  authDomain: "amazn-clone-bmg.firebaseapp.com",
  databaseURL: "https://amazn-clone-bmg.firebaseio.com",
  projectId: "amazn-clone-bmg",
  storageBucket: "amazn-clone-bmg.appspot.com",
  messagingSenderId: "420313417638",
  appId: "1:420313417638:web:1ac04f6bb71af30118b167",
  measurementId: "G-CKN28V2G7G",
});

const auth = firebaseInit.auth();

export { auth };
