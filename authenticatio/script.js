// script.js (Handles User Authentication & Role-based Redirects)
import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

// Signup Function
async function signup() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Store user role in Firestore
        await setDoc(doc(db, "users", email), { role: "user" });
        alert("Signup Successful! Please login.");
    } catch (error) {
        console.error("Error signing up:", error.message);
        alert(error.message);
    }
}

// Login Function
async function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Get user role from Firestore
        const userDoc = await getDoc(doc(db, "users", email));
        if (userDoc.exists()) {
            const role = userDoc.data().role;
            
            if (role === "admin") {
                window.location.href = "admin.html";
            } else {
                window.location.href = "dashboard.html";
            }
        } else {
            alert("User role not found!");
        }
    } catch (error) {
        console.error("Login error:", error.message);
        alert(error.message);
    }
}

// Logout Function
function logout() {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        window.location.href = "index.html";
    }).catch((error) => {
        console.error("Logout error:", error.message);
        alert(error.message);
    });
}

// Export functions to use in HTML
window.signup = signup;
window.login = login;
window.logout = logout;
