import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC5cbJVcOMxYyEpq3BFoDyRZNzFqYwuonI',
  authDomain: 'fir-operations-a76b7.firebaseapp.com',
  projectId: 'fir-operations-a76b7',
  storageBucket: 'fir-operations-a76b7.appspot.com',
  messagingSenderId: '459637200410',
  appId: '1:459637200410:web:b2108400e68cd905b9a3a3',
  measurementId: 'G-7M6P3Z4CCL',
};

export const firestore = firebase.firestore();
firebase.initializeApp(firebaseConfig);
export default firebase;
