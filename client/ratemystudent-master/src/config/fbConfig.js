import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyDOl30134oR92AXNwPKET-pJ7GzLXldiMc",
    authDomain: "ratemystudent-f8ca1.firebaseapp.com",
    databaseURL: "https://ratemystudent-f8ca1.firebaseio.com",
    projectId: "ratemystudent-f8ca1",
    storageBucket: "",
    messagingSenderId: "313966748597",
    appId: "1:313966748597:web:edbded4ccaf20ae2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;
