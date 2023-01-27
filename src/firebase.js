import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/firestore';

 export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyC_p_BNatVvYUZDBVm2W1L2mxnHBCbeFR0",
    authDomain: "chat-app-a1ffb.firebaseapp.com",
    projectId: "chat-app-a1ffb",
    storageBucket: "chat-app-a1ffb.appspot.com",
    messagingSenderId: "517174551425",
    appId: "1:517174551425:web:329c4b4089f7c8390dfe80"
  }).auth();