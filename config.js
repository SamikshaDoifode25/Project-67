import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAmoDPv2n6P0lnGN4PCpUHeIP7h2dSWwfY",
  authDomain: "class-test-a4431.firebaseapp.com",
  projectId: "class-test-a4431",
  storageBucket: "class-test-a4431.appspot.com",
  messagingSenderId: "1070030723487",
  appId: "1:1070030723487:web:740cdfbe9d5cd5d29fc5aa",
  measurementId: "G-X3BPLVKJP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase.database();
