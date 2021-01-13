import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config ={
  apiKey: "AIzaSyAN4HD1x5yWVGMcAJrT5xhCh59WJSTTKFs",
  authDomain: "crwn-db-709d9.firebaseapp.com",
  projectId: "crwn-db-709d9",
  storageBucket: "crwn-db-709d9.appspot.com",
  messagingSenderId: "492921839130",
  appId: "1:492921839130:web:02b2fe3d8c00fbcf023ba3",
  measurementId: "G-JC4T79NGCE"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;