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

// login form
const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value
    signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        
        // signInWithRedirect("../screens/index.html");
    })
    .catch((err) => {
        console.log(err.message)
        alert(err.code)
    })
})
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "../screens/index.html";
    }
    console.log('user status changed: ', user)

})