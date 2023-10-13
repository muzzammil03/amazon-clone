import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArwgFNNMQLl1lDl_kYT49XzRL18XsxpBg",
  authDomain: "fir-31ec9.firebaseapp.com",
  projectId: "fir-31ec9",
  storageBucket: "fir-31ec9.appspot.com",
  messagingSenderId: "175080934295",
  appId: "1:175080934295:web:95435d6daed4f6c02912d2",
  measurementId: "G-JZF41NMBMJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };