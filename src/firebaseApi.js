import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import FirebaseConfig from './firebaseConfig';

export const firebaseApp = firebase.initializeApp(FirebaseConfig);
export const db = firebaseApp.firestore();

const getUsersFromFirebase = [];

export const onUserList = (setUsers) => {
    return db
    .collection("Users")
    .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getUsersFromFirebase.push({...doc.data(), key: doc.id,
          });
        });
        setUsers(getUsersFromFirebase);
    });
} 