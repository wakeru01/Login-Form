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

const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = signupForm.email.value
    const password = signupForm.password.value

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        
        signupForm.reset()
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert(errorCode)
    });
})

onAuthStateChanged(auth, (user) => {
    console.log('user status changed: ', user)
})