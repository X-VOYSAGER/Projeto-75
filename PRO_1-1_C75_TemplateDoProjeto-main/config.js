import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD0WHGxg519XaNs1UVH7iQfpyE80IGrErw",
  authDomain: "bicicreta-784b0.firebaseapp.com",
  projectId: "bicicreta-784b0",
  storageBucket: "bicicreta-784b0.appspot.com",
  messagingSenderId: "593216531127",
  appId: "1:593216531127:web:4f2e6fceace2cd3ff47b32"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
