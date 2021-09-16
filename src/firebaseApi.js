import firebase from "firebase/compat/app";

import "firebase/compat/storage";

import "firebase/compat/auth";
import "firebase/compat/firestore";

import FirebaseConfig from "./firebaseConfig";

export const firebaseApp = firebase.initializeApp(FirebaseConfig);
export const db = firebaseApp.firestore();
export const storageRef = firebaseApp.storage().ref();

const getUsersFromFirebase = [];
const getPostsFromFirebase = [];
const getFeedFromFirebase = [];

export const onUserList = (setUsers) => {
    return db
    .collection("Users")
    .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let dataExists = false;
          for (let i = 0; i <= getUsersFromFirebase.length; i++) {
            if(getUsersFromFirebase[i] !== undefined) {
              if (getUsersFromFirebase[i].email === doc.data().email) {
                dataExists = true;
              }
            }            
          }
          if(!dataExists) {
            getUsersFromFirebase.push({...doc.data(), key: doc.id,}); 
          }                   
        });
        setUsers(getUsersFromFirebase);
    });
};

export const onPostList = (setPosts, user) => {
  return db
  .collection("Posts").doc('001').collection(user.uid)
  .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let dataExists = false;
        for (let i = 0; i <= getPostsFromFirebase.length; i++) {
          if(getPostsFromFirebase[i] !== undefined) {
            if (getPostsFromFirebase[i].key === doc.id) {
              dataExists = true;
            }
          }            
        }
        if(!dataExists) {
          getPostsFromFirebase.push({...doc.data(), key: doc.id,}); 
        }                   
      });
      setPosts(getPostsFromFirebase);
  });
};

export const onFeedList = (setFeed) => {
  return db
  .collection("Feed")
  .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let dataExists = false;
        for (let i = 0; i <= getFeedFromFirebase.length; i++) {
          if(getFeedFromFirebase[i] !== undefined) {
            if (getFeedFromFirebase[i].key === doc.id) {
              dataExists = true;
            }
          }            
        }
        if(!dataExists) {
          getFeedFromFirebase.push({...doc.data(), key: doc.id,}); 
        }                   
      });
      setFeed(getFeedFromFirebase);
  });
};
