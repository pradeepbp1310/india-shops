import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './firebase.config';

const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;