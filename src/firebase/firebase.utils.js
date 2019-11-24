import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDkufSGPZvPnwK1H-XAZJKnudPT1VZbh5E",
    authDomain: "crwn-db-b072b.firebaseapp.com",
    databaseURL: "https://crwn-db-b072b.firebaseio.com",
    projectId: "crwn-db-b072b",
    storageBucket: "crwn-db-b072b.appspot.com",
    messagingSenderId: "231627018119",
    appId: "1:231627018119:web:114f66ca90a9e599c74d22",
    measurementId: "G-MF3P0E336X"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'Select Account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;