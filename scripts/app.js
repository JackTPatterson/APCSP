 //* -- This file is for initializing the firebase serivce and connecting it to our website --
 
 var firebaseConfig = {
   apiKey: "AIzaSyCgmP5JpWhlUv_RjvPnKMlhBt2lVhUJwJw",
   authDomain: "apcsp-65a13.firebaseapp.com",
   databaseURL: "https://apcsp-65a13-default-rtdb.firebaseio.com",
   projectId: "apcsp-65a13",
   storageBucket: "apcsp-65a13.appspot.com",
   messagingSenderId: "1072982655239",
   appId: "1:1072982655239:web:8e28c1e7d930ffe29305a2",
   measurementId: "G-YTS8NN7989"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();