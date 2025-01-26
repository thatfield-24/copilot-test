// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwlUskdUkjjQsU1mwCjwC_3KIcc_1HvUA",
  authDomain: "co-pilot-test-853ea.firebaseapp.com",
  databaseURL: "https://co-pilot-test-853ea-default-rtdb.firebaseio.com",
  projectId: "co-pilot-test-853ea",
  storageBucket: "co-pilot-test-853ea.firebasestorage.app",
  messagingSenderId: "13547929888",
  appId: "1:13547929888:web:902026f7defd3399665745",
  measurementId: "G-EB90BN2QL2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const realtimedb = firebase.database();
