import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import FirebaseConfig from './firebaseConfig';

export const firebaseApp = firebase.initializeApp(FirebaseConfig);
const db = firebaseApp.firestore();