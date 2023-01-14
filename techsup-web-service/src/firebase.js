// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB91-r6M_JS4zE6ldjZfiAOGPuzZqo68oA",
    authDomain: "techsup-web-service.firebaseapp.com",
    projectId: "techsup-web-service",
    storageBucket: "techsup-web-service.appspot.com",
    messagingSenderId: "649184201224",
    appId: "1:649184201224:web:3dc66de3e273cfa7efdfbd",
    measurementId: "G-9P0G0QBBVJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};