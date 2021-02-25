import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBEiFnndhQh_-3V5NSBA7appA0OvgIEFmw",
  authDomain: "slack-clone-challenge-reactjs.firebaseapp.com",
  projectId: "slack-clone-challenge-reactjs",
  storageBucket: "slack-clone-challenge-reactjs.appspot.com",
  messagingSenderId: "166739438687",
  appId: "1:166739438687:web:27905d03e390d1b3fd3fea"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;