import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlI9WN3VM0bjl5eSacNSLdsaOMmBZ7OD4",
    authDomain: "lockin-6fa71.firebaseapp.com",
    projectId: "lockin-6fa71",
    storageBucket: "lockin-6fa71.appspot.com",
    messagingSenderId: "805070160447",
    appId: "1:805070160447:web:970f3a36fa842ffc5bee8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get DOM elements
var name_email = document.getElementById('name_email');
var name_signup_password = document.getElementById('name_signup_password');
var name_login_username = document.getElementById('name_login_username');
var name_login_password = document.getElementById('name_login_password');
var login_error = document.getElementById('login_error');
var signup_submit_button = document.getElementById('name_signup_button');
var login_submit_button = document.getElementById('name_login_button');
var name_signup_username = document.getElementById('name_signup_username');

// Helper function to show errors
function showError(message) {
    login_error.style.display = 'block';
    login_error.innerText = message;
}

// Sign-up function
signup_submit_button.addEventListener('click', function (e) {
    const email = name_email.value;
    const password = name_signup_password.value;

    if (!email || !password) {
        showError('Email and Password are required');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            signup_login()
            const user = userCredential.user;
            console.log('User signed up:', user);
            login_error.style.display = 'none'; // Hide error if successful
            name_email.value='';
            name_signup_password.value='';
            name_signup_username.value='';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error('Error during sign up:', errorMessage);
            showError(`Sign Up Error: ${errorMessage}`);
        });
});

// Log in function
login_submit_button.addEventListener('click', function (e) {
    e.preventDefault();

    const username = name_login_username.value;
    const password = name_login_password.value;

    if (!username || !password) {
        showError('Username and Password are required');
        return;
    }

    signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Logged in successfully
            const user = userCredential.user;
            console.log('User logged in:', user);
            login_error.style.display = 'none'; // Hide error if successful
            launch_lockin();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error during login:', errorCode, errorMessage);
            showError("Invalid Username or Password entered");
        });
});
