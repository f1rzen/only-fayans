// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',

apiKey: `${import.meta.env.VITE_API_KEY}`,
authDomain: `${import.meta.env.VITE_AUTH_DOMAIN}`,
projectId: `${import.meta.env.VITE_PROJECT_ID}`,
storageBucket: `${import.meta.env.VITE_STORAGE_BUCKET}`,
messagingSenderId: `${import.meta.env.VITE_MESSAGING_SENDER_ID}`,
appId: `${import.meta.env.VITE_APP_ID}`,
measurementId: `${import.meta.env.VITE_MEASUREMENT_ID}`
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
