import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore

const firebaseConfig = {
    apiKey: "AIzaSyAAx4YTGUgPjwRTwg7SdYJBuWaeCvH2OmU",
  authDomain: "finalproject-react-7421d.firebaseapp.com",
  projectId: "finalproject-react-7421d",
  storageBucket: "finalproject-react-7421d.appspot.com",
  messagingSenderId: "852732490788",
  appId: "1:852732490788:web:c8ab8518cbd162a22754b1",
  measurementId: "G-SP22RBR5FD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db