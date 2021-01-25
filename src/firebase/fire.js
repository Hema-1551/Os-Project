import firebase from './node_modules/firebase/app';
import './node_modules/firebase/auth';
import './node_modules/firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAsMo7mbUw1FPrMPCxkHYJdbf8TeunbO-M",
    authDomain: "flutter-firebase-learnin-f2cae.firebaseapp.com",
    databaseURL: "https://flutter-firebase-learnin-f2cae-default-rtdb.firebaseio.com",
    projectId: "flutter-firebase-learnin-f2cae",
    storageBucket: "flutter-firebase-learnin-f2cae.appspot.com",
    messagingSenderId: "162279082779",
    appId: "1:162279082779:web:ea7b3e00f483b3c5afe1be",
    measurementId: "G-BKSG15K0ZD"
  };
  var fire = firebase.initializeApp(firebaseConfig);
  
  export default auth = fire.auth();
  export default db = fire.database();
