import firebase from 'firebase/app';
//import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDIiHxH4br8eRwopfROkqtbl1GxgPWtrNM",
  authDomain: "projetocrmweb.firebaseapp.com",
  projectId: "projetocrmweb",
  storageBucket: "projetocrmweb.appspot.com",
  messagingSenderId: "1012763417803",
  appId: "1:1012763417803:web:9e7409e1beba9d87068f4e",
  measurementId: "G-M5NZ4X4PE4"
}; 

export default firebase.initializeApp(firebaseConfig);
