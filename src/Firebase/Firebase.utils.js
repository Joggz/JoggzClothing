 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 const config =   {
    apiKey: "AIzaSyBQmEgwF4oXSSc7zlazspFKlPYCC-HaTe8",
    authDomain: "joggz-db.firebaseapp.com",
    databaseURL: "https://joggz-db.firebaseio.com",
    projectId: "joggz-db",
    storageBucket: "joggz-db.appspot.com",
    messagingSenderId: "70083623468",
    appId: "1:70083623468:web:47e630236d0eca21c12f89",
    measurementId: "G-6TB7CZ7NB7"
    };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    console.log(userRef)

    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
        
      } catch (error) {
        console.log('error' + error.message)
      }
    }
      return userRef
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;