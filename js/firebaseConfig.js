  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyDgOETC8qCBI1n5tT4JicvA7c6U71ZK6qc",

    authDomain: "project-2-pronia.firebaseapp.com",

    databaseURL: "https://project-2-pronia-default-rtdb.firebaseio.com",

    projectId: "project-2-pronia",

    storageBucket: "project-2-pronia.appspot.com",

    messagingSenderId: "285950535717",

    appId: "1:285950535717:web:c9840bbadd5ecdb555f7cc"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  export default app
