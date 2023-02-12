import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB3bhm-3r3WfWY4En2IN94ZK4a8jiPlnNo',
  authDomain: 'pkeverything-93439.firebaseapp.com',
  projectId: 'pkeverything-93439',
  storageBucket: 'pkeverything-93439.appspot.com',
  messagingSenderId: '917850944650',
  appId: '1:917850944650:web:954b5543fb6aa8a89a2973',
  measurementId: 'G-90YTK5T7EG',
};

// Initialize Firebase
if (!firebase.app.length) {
  initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
const analytics = getAnalytics(app);
