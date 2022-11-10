import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBpIeywkvv9MR4Mq_0Ro47plFq5wgu-JoU",
    authDomain: "ylgproject.firebaseapp.com",
    projectId: "ylgproject",
    storageBucket: "ylgproject.appspot.com",
    messagingSenderId: "309832293925",
    appId: "1:309832293925:web:996eb58814974fa71529cc"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// logout button
document.getElementById('logout').addEventListener('click', (e) => {
    signOut(auth)
        .then(() => {
            window.location.href = "../screens/login.html";
        })
        .catch((err) => {
            console.log(err.message)
        })
})
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user == null) {
        window.location.href = "../screens/login.html";
    }
    console.log('user status changed: ', user)
})