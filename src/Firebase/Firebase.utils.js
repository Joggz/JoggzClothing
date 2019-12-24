 import firebase from 'firebase/app';

 import 'firebase/firestore';
 import 'firebase/auth';

 const config =  {
  apiKey: "AIzaSyCZmcsPxFpn9q9is_jG7vvce2n9Q2yHv4Y",
  authDomain: "crwn-clothings-75da1.firebaseapp.com",
  databaseURL: "https://crwn-clothings-75da1.firebaseio.com",
  projectId: "crwn-clothings-75da1",
  storageBucket: "crwn-clothings-75da1.appspot.com",
  messagingSenderId: "990646169138",
  appId: "1:990646169138:web:909a218f721fcaca0b162b"
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