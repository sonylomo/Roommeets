import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWPERw1bWGNrp7TaP-awqlMe9i4ePM3qo",
  authDomain: "the-roommeets.firebaseapp.com",
  projectId: "the-roommeets",
  storageBucket: "the-roommeets.appspot.com",
  messagingSenderId: "660116897832",
  appId: "1:660116897832:web:529182e4b10a453f82f51d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export { database, firebase as default };
