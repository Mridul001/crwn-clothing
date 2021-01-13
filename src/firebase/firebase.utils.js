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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(err){
      console.log('error creating user',err.message);
    }

  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;