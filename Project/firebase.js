// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "learningproject-fd011.firebaseapp.com",
    projectId: "learningproject-fd011",
    storageBucket: "learningproject-fd011.appspot.com",
    messagingSenderId: "791480542340",
    appId: "1:791480542340:web:e9eee2d234507794a4ced1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Validate Email and Password
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
    return password.length >= 6; // Require at least 6 characters
}

// Register Function
document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.querySelector(".register-btn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (!validateEmail(email)) {
                alert("Please enter a valid email!");
                return;
            }

            if (!validatePassword(password)) {
                alert("Password must be at least 6 characters long!");
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Registration Successful 🎉");
                    window.location.href = "index.html"; // Redirect to login page
                })
                .catch((error) => {
                    alert("Error: " + error.message);
                });
        });
    }

    // Login Function
    const loginBtn = document.querySelector(".login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (!validateEmail(email) || !validatePassword(password)) {
                alert("Invalid email or password!");
                return;
            }

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Login Successful 🚀");
                    window.location.href = "dashboard.html";
                })
                .catch((error) => {
                    alert("Error: " + error.message);
                });
        });
    }

    // Guest Login Button Fix
    let guestBtn = document.querySelector(".guest-login");
        guestBtn.addEventListener("click", () => {
            window.location.href = "dashboard.html";
        });
    
});
